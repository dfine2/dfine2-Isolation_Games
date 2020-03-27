import React, {useState, useEffect} from 'react';
import openSocket from 'socket.io-client'

const App = () => {

  const endpoint =  "http://127.0.0.1:4001"
  useEffect(()=>{
    const socket = openSocket(endpoint)
    socket.on('message', function (data) {
      console.log(data);
    })
  })
return <div>Hello</div>
}

export default App
