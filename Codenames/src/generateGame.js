
const library = require('./library')

    const generateGame = (gameState) => {
        let {key, deck, cards, blueCards, redCards, turn} = gameState
          console.log(library.length)
        if(deck.length < 25){

            deck = [...library]
        }

        key = []
        for(let i = 0; i < 8; i++){
            key.push('red')
            key.push('blue')
        }
        for(let i= 0; i < 7; i++ ){
            key.push('grey')
        }
        key.push('black')
        const whichGetsExtra = Math.floor(Math.random()*2) === 1 ? 'blue' : 'red'
        key.push(whichGetsExtra)

        const shuffledKey = []
        for (let i = 25; i > 0; i--) {
            const random = Math.floor(Math.random() * key.length)
            shuffledKey.push(key[random])
            key.splice(random, 1)
        }
        key = shuffledKey
        const words = []
        for (let i = 0; i < 25; i++) {
            const random = Math.floor(Math.random() * deck.length)
            words.push(deck[random])
            deck.splice(random, 1)
        }

        cards = []

        for(let i = 0; i < 25; i++){
            cards.push({word: words[i], color: key[i], revealed: false})
        }

        blueCards = cards.filter(card => card.color === 'blue').length
        redCards = cards.filter(card=> card.color === 'red' ).length

        turn = blueCards > redCards ? 'blue' : 'red'

        gameState = {
            key : key,
            deck: deck,
            cards: cards,
            blueCards: blueCards,
            redCards: redCards,
            turn: turn
        }

        return gameState
    }

module.exports =  generateGame
