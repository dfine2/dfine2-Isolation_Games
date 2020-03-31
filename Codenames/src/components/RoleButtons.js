import React from 'react'
import styled from 'styled-components'
import {useGameState, useGameDispatch} from '../gameState'


const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px;
`
const RoleButton = styled.button`
    width: 100%;
    background-color: ${({isSelected}) => isSelected ? 'lightslategrey' : 'silver'};
    cursor: pointer;
    font-size: 24px;
    height: 90px;
    border: ${({ isSelected }) => isSelected ? '4px inset lightslategrey' : '4px groove silver'};
    outline: 0;
    font-family: 'Snell Roundhand'
`
const RoleButtons = () => {
    const {view} = useGameState()
    const {setView} = useGameDispatch()

    return (
        <Container>
            <RoleButton  isSelected={view === 'agent'} onClick={() => setView('agent')}>Agent</RoleButton>
            <RoleButton isSelected={view === 'spymaster'} onClick={() => setView('spymaster')}>Spymaster</RoleButton>
            <RoleButton  isSelected={view === 'arbiter'} onClick={() => setView('arbiter')}>Arbiter</RoleButton>
        </Container>
    )
}

export default RoleButtons
