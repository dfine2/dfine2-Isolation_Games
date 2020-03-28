import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import KeyCard from './KeyCard'
import {getKey}from '../api'
import {generateCards} from '../utils'
import Board from './Board'
import  {useServerState, useServerDispatch} from '../api'



const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


const App = () => {
  const {key, extraColor, cards, user} = useServerState()
  const {getKey, getCards} = useServerDispatch()


return(
  <>
    <button onClick={getKey}>
      Generate Key
      </button>
    <button onClick={() => getCards(key)}>
      Deal Cards
      </button>
      <Container>
    {key && < KeyCard pattern={key} extraCard={extraColor} />}
    {cards && < Board cards={cards} />}
    </Container>
    </>
)

}



export default App



  //
