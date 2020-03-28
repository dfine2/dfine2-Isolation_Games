
const library = require('./library')

    const generateKey = () => {
        const key = []

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
        return shuffledKey
    }

const generateCards= (deck,key, setDeck) => {

    const words = []
    for (let i = 0; i < 25; i++) {
        const random = Math.floor(Math.random() * deck.length)
        words.push(deck[random])
        deck.splice(random, 1)
        setDeck(deck)
    }
    const cards = []
    for(let i = 0; i < 25; i++){
        cards.push({word: words[i], color: key[i], revealed: false})
    }

return cards
}

module.exports =  {generateCards, generateKey}
