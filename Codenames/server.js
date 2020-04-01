
const io = require('socket.io')({origins: '*:*' });
const  generateGame = require('./src/generateGame')
const library = require('./src/library')

let gameState = {
    key: [],
    deck: [...library],
    cards: [],
    blueCards: 0,
    redCards: 0,
    turn: '',
}

gameState = generateGame(gameState)

let interval;

io.on("connection", client => {
    console.log("New client connected")


    console.log({...gameState})
    if (interval) {
        clearInterval(interval);
    }


    interval = setInterval(() =>{
        io.sockets.emit('gameState', gameState)}, 1000)

    client.on("disconnect", () => {
        console.log("Client disconnected");
    })

    client.on('flipCard', (word)=>{
        const card  = gameState.cards.filter(x => x.word === word)[0]
        card.revealed = true
        if(card.color === 'blue') gameState.blueCards -= 1
        if(card.color === 'red') gameState.redCards -= 1
    })

    client.on('startNewGame', ()=>{
        gameState = generateGame(gameState)
        // io.sockets.emit('newGame', gameState)
    })

    client.on('endTurn', ()=>{
        gameState.turn = gameState.turn === 'red' ? 'blue' : 'red'
    })

});


const port = 3000;

io.listen(port)
io.set('origins', '*:*');
console.log('listening on port ', port)

