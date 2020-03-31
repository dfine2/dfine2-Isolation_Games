import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import GameProvider from './gameState'

ReactDOM.render(
  <GameProvider>
    <App/>
  </GameProvider>,
  document.getElementById('root')
)

