import openSocket from 'socket.io-client'
import React, {createContext, useState, useContext, useEffect} from 'react'
import library from './library'

const endpoint = "http://127.0.0.1:3001"
const socket = openSocket(endpoint)


const ServerState =  createContext()
const ServerDispatch = createContext()

const ServerProvider = ({children}) => {
    const [user, setUser] = useState()
    const [players, setPlayers] = useState()
    const [key, setKey] = useState()
    const [deck, setDeck] = useState([...library])
    const [extraColor, setExtraColor] = useState()
    const [cards, setCards] = useState()

    useEffect(()=>{
        identifyUser()
        getKey()
    }, [])

    useEffect(()=>{
        if(deck.length === 0){
            setDeck([...library])
        }
    },[deck])

    useEffect(() => {
        if(key){
            const blues = key.filter(x => x === 'blue')
            setExtraColor(blues.length === 9 ? 'blue' : 'red')
        }
    }, [key])

    socket.on('gameState', data => console.log(data.cards[0]))

    const getKey = () => {
        socket.on('newKey',  (data) => {
            console.log(data)
            setKey(data)})
        socket.emit('getKey')
    }

    const getCards = () => {
        socket.on('newCards', (data) => setCards(data))
        socket.emit('getCards', deck, key, setDeck)

    }

    const identifyUser = () => {
        socket.on('identify', data => setUser(data))

        socket.emit('identifyUser')
    }

    const flipCard = (word) => {
        socket.on('updateCards', data => setCards(data))
        console.log(cards)
        socket.emit('flipCard', word)
    }


    return (
        <ServerState.Provider value={{ key, extraColor, cards, user }}>
            <ServerDispatch.Provider value={{  getKey, getCards, identifyUser, setUser, flipCard}}>
                {children}
            </ServerDispatch.Provider>
        </ServerState.Provider>
    )
}

const useServerState = () => {
    const context = useContext(ServerState)
    return context
}

const useServerDispatch = () => {
    const context = useContext(ServerDispatch)
    return context
}

export default ServerProvider

export {useServerState, useServerDispatch}
