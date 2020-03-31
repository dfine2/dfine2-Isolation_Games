import React from 'react'
import styled from 'styled-components'
import {useGameDispatch} from '../gameState'

const Container = styled.div`
    display: grid;
    grid-template-columns: 150px 150px;
`
const StyledButton = styled.button`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
`
const TurnActions = () => {
    const { startNewGame, endTurn } = useGameDispatch()
    return(
        <Container>
            <StyledButton onClick={() => endTurn()}>End Turn</StyledButton>
            <StyledButton onClick={() => startNewGame()}>New Game</StyledButton>
        </Container>
    )
}

export default TurnActions
