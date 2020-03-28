import openSocket from 'socket.io-client'
import React, {createContext, useState, useContext, useEffect} from 'react'
import library from './library'

const endpoint = "http://127.0.0.1:3001"
const socket = openSocket(endpoint)


const ServerState =  createContext()
const ServerDispatch = createContext()

const ServerProvider = ({children}) => {
    const [playerCount, setPlayerCount] = useState(0)
    const [key, setKey] = useState()
    const [deck, setDeck] = useState([...library])
    const [extraColor, setExtraColor] = useState()
    const [cards, setCards] = useState()

    useEffect(()=>{
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



    const getKey = async () => {
        socket.on('newKey',  (data) => setKey(data))
        socket.emit('getKey')
    }

    const getCards = async () => {
        socket.on('newCards', (data) => setCards(data))
        socket.emit('getCards', deck, key, setDeck)

    }



    return (
        <ServerState.Provider value={{ playerCount, key, extraColor, cards }}>
            <ServerDispatch.Provider value={{ setPlayerCount, getKey, getCards}}>
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
