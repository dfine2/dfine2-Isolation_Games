import React, {useState, useEffect} from 'react';
import openSocket from 'socket.io-client'
import KeyCard from './KeyCard'

const endpoint = "http://127.0.0.1:4001"
const socket = openSocket(endpoint)


const App = () => {
  const [playerCount, setPlayerCount] = useState(0)
  useEffect(()=>{
    socket.on('message', function (data) {
      console.log(data);
    })


  })

  useEffect(()=>{
    socket.emit('new player')
  },[playerCount])



  var movement = {
    up: false,
    down: false,
    left: false,
    right: false
  }
  document.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
      case 65: // A
        movement.left = true;
        break;
      case 87: // W
        movement.up = true;
        break;
      case 68: // D
        movement.right = true;
        break;
      case 83: // S
        movement.down = true;
        break;
    }
  });
  document.addEventListener('keyup', function (event) {
    switch (event.keyCode) {
      case 65: // A
        movement.left = false;
        break;
      case 87: // W
        movement.up = false;
        break;
      case 68: // D
        movement.right = false;
        break;
      case 83: // S
        movement.down = false;
        break;
    }
  });

  var canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 600;
  var context = canvas.getContext('2d');
  socket.on('state', function (players) {
    context.clearRect(0, 0, 800, 600);
    context.fillStyle = 'green';
    for (var id in players) {
      var player = players[id];
      context.beginPath();
      context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
      context.fill();
    }
  });

  setInterval(function () {
    socket.emit('movement', movement);
  }, 1000 / 60);


const keycards= [
    {
        pattern: [
          'red', 'blue', 'red', 'red', 'blue',
          'grey', 'blue', 'red', 'grey', 'grey',
          'red', 'grey', 'blue', 'blue', 'blue',
          'grey', 'blue', 'grey', 'blue', 'red',
          'blue', 'red', 'red', 'black', 'grey',
        ],
        extraColor: 'blue'
    },
    {
        pattern:
        [
          'grey', 'blue', 'red', 'red', 'grey',
          'blue', 'blue', 'blue', 'black', 'blue',
          'grey', 'red', 'grey', 'grey', 'red',
          'grey', 'red', 'red', 'red', 'grey',
          'blue', 'blue', 'blue', 'blue', 'red',
        ],
        extraColor: 'blue'
    }
]
  const keyNumber = Math.floor(Math.random() * keycards.length)
  console.log(keyNumber)
const currentKey= keycards[keyNumber]





return(
<>
<button onClick={()=> setPlayerCount(playerCount + 1)}>Add Player</button>
<KeyCard pattern={currentKey.pattern} extraCard={currentKey.extraColor}/>
</>
)

}



export default App
