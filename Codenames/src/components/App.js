import React, {useState, useEffect} from 'react';
import KeyCard from './KeyCard'
import {getKey}from '../api'
import {generateCards} from '../utils'
import Board from './Board'
import  {useServerState, useServerDispatch} from '../api'




const App = () => {
  const {key, extraColor, cards} = useServerState()
  const {getKey, getCards} = useServerDispatch()


return(
    <>
      <button onClick={getKey}>
          Generate Key
      </button>
      <button onClick={()=>getCards(key)}>
        Deal Cards
      </button>
      {key && < KeyCard pattern={key} extraCard={extraColor} />}
      {cards && < Board cards={cards} />}
    </>

)

}



export default App



  //
