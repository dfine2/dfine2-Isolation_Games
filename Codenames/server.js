
const io = require('socket.io')({origins: '*:*' });
const { generateCards, generateKey } = require('./src/utils')


let gameState = {
    cards: ['abc','efg'],
    key: []
}
const cache = {
    cards: []
}
let interval;

io.on("connection", client => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }


    interval = setInterval(() =>{
        let key = generateKey()
        io.sockets.emit('newKey', key)}, 1000)
    client.on("disconnect", () => {
        console.log("Client disconnected");
    })

    client.on("disconnect", ()=> {
        console.log("Client disconnected")
    })


    client.on('getKey', () => {
        const key = generateKey()
        io.sockets.emit('newKey', key)
    })

    client.on('getCards', (deck, key, setDeck) => {
        if (key) {
            const cards = generateCards(deck ,key, setDeck)
            cache.cards = cards
            console.log(cache.cards)
            io.sockets.emit('newCards', cards)}
    })

    client.on('flipCard', (word) => {
        const cards = cache.cards
        const card = cache.cards.filter(x=> x.word === word)
        console.log(card)
        card[0].revealed = true
        io.sockets.emit('updateCards', cards)
    })

});


const port = 3001;

io.listen(port)
io.set('origins', '*:*');
console.log('listening on port ', port)

