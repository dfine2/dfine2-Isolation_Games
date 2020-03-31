import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import KeyCard from './KeyCard'
import Scores from './Scores'
import RoleButtons from './RoleButtons'
import {getKey}from '../gameState'
import {generateCards} from '../generateGame'
import Board from './Board'
import  {useGameState, useGameDispatch} from '../gameState'




const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  margin: 40px 32px 8px 32px;
  `

const RightActionBar = styled.div`
  display: flex;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


const App = () => {
  const {localState} = useGameState()
  const {startNewGame, endTurn} = useGameDispatch()
  const {cards, turn } = localState



return(
    <Container>
      <div style = {{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
      <TopBar>
        <Scores />
        <div style={{color:turn}}>{turn}'s turn</div>
        <RightActionBar>

          <button onClick={() => endTurn()}>End Turn</button>
          <button onClick={() => startNewGame()}>New Game</button>
        </RightActionBar>
      </TopBar>
        {cards && < Board cards={cards} />}
        <RoleButtons/>
      </div>

    </Container>
)

}



export default App



  //
