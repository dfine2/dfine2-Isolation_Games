import React from 'react';
import styled from 'styled-components'
import TurnActions from './TurnActions'
import Scores from './Scores'
import RoleButtons from './RoleButtons'
import Board from './Board'
import  {useGameState, useGameDispatch} from '../gameState'




const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92%;
  margin: 40px 32px 8px 32px;
  `


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


const App = () => {
  const {localState} = useGameState()

  const {cards, turn } = localState



return(
    <Container>
      <div style = {{display: 'flex', flexDirection: "column", alignItems: 'center'}}>
      <TopBar>
        <Scores />
        <div style={{color:turn}}>{turn}'s turn</div>
        <TurnActions/>
      </TopBar>
        {cards && < Board cards={cards} />}
        <RoleButtons/>
      </div>

    </Container>
)

}



export default App



  //
