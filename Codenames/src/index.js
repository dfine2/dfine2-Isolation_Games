import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Welcome from './components/Welcome'
import ServerProvider from './api'
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'






// ReactDOM.render(
//   <ServerProvider>
//     <Router>
//       <div>
//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/codenames">
//             <App/>
//           </Route>
//           <Route path="/">
//             <Welcome />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   </ServerProvider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ServerProvider>
    <App/>
  </ServerProvider>,
  document.getElementById('root')
)

