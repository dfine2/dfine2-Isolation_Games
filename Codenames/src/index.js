import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import ServerProvider from './api'





ReactDOM.render(
  <ServerProvider>
    <App />
  </ServerProvider>,
  document.getElementById('root')
);


