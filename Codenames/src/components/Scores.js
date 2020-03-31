import React from 'react'
import styled from 'styled-components'
import {useGameState} from '../gameState'

const Container = styled.div`
    display: grid;
    grid-template-columns: 150px 150px;

`
const ScoreCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    padding-left: 24px;
    background-color: ${({color})=> color};
    color: white;
    font-size: 16px;
`
const Scores = ()=> {
    const {localState} = useGameState()
    const {blueCards, redCards} = localState

  return (
  <Container>
      <ScoreCard color='red'>Red: {redCards}</ScoreCard>
      <ScoreCard color='blue'>Blue: {blueCards}</ScoreCard>
  </Container>
   )
  }


export default Scores
