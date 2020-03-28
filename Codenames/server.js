
const io = require('socket.io')({origins: '*:*' });
const { generateCards, generateKey } = require('./src/utils')


let players = {}

io.on("connection", client => {
    console.log(client.id)
     console.log("New client connected")
    const newPlayer = {
        active: false,
        name: '',
        team: '',
        cluegiver: false,
        chooser: false
    }
    players[client.id] = newPlayer


    client.on("disconnect", ()=> {
        console.log("Client disconnected")
        delete players[client.id]
    })

    client.on('newPlayer', () => {
        console.log('new player')

    })

    client.on('getKey', () => {
        const key = generateKey()
        io.sockets.emit('newKey', key)
    })

    client.on('getCards', (deck, key, setDeck) => {
        if (key) {
            const cards = generateCards(deck ,key, setDeck)
            io.sockets.emit('newCards', cards)}
    })

    client.on('startNewRound', () => {
            io.sockets.emit('newRound')
    })

});


const port = 3001;

io.listen(port)
io.set('origins', '*:*');
console.log('listening on port ', port)

