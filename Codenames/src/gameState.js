import openSocket from 'socket.io-client'
import React, { createContext, useState, useContext, useEffect } from 'react'


//yarn ngrok http -host-header=rewrite 3000

const endpoint = "https://ae5a8b50035f.ngrok.io"
const socket = openSocket(endpoint)


const GameState = createContext()
const GameDispatch = createContext()

const initialState = {
    key: [],
    cards: [],
    deck: [],
    blueCards: 0,
    redCards: 0,
    turn: ''
}

const GameProvider = ({ children }) => {
    const [localState, setLocalState] = useState(initialState)
    const [view, setView] = useState('agent')

    socket.on('gameState', gameState => setLocalState(gameState))
    socket.on('newGame', gameState => setLocalState(gameState))

    const flipCard = (word) => {
        socket.emit('flipCard', word)
    }

    const startNewGame = () => {
        socket.emit('startNewGame')
    }

    const endTurn = () => {
        socket.emit('endTurn')
    }

    return (
        <GameState.Provider value={{ localState, view }}>
            <GameDispatch.Provider value={{ flipCard, setView, startNewGame, endTurn }}>
                {children}
            </GameDispatch.Provider>
        </GameState.Provider>
    )
}

const useGameState = () => {
    const context = useContext(GameState)
    return context
}

const useGameDispatch = () => {
    const context = useContext(GameDispatch)
    return context
}

export default GameProvider

export { useGameState, useGameDispatch }
