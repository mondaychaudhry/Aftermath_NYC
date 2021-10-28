// import './App.css';
// import React, { useState, useEffect } from 'react'
// import AuthenticatedApp from './AuthenticatedApp'
// import UnauthenticatedApp from './UnauthenticatedApp'
// import { BrowserRouter as Router } from 'react-router-dom'

// function App() {
//   const [currentUser, setCurrentUser] = useState(null)
//   console.log(currentUser)
//   const [authChecked, setAuthChecked] = useState(false)

//   useEffect(() => {
//     fetch('http://127.0.0.1:3000/me', {
//       credentials: 'include'
//     })
//       .then(res => {
//         if (res.ok) {
//           res.json().then((user) => {
//             setCurrentUser(user)
//             setAuthChecked(true)
//           })
//         } else {
//           setAuthChecked(true)
//         }
//       })
//   }, [])

//   // if(!authChecked) { return <div></div>}
//   return (
//     <Router> 
      
//       {currentUser ? (
//           <AuthenticatedApp
//             setCurrentUser={setCurrentUser}
//             currentUser={currentUser}
//           />
//         ) : (
//           <UnauthenticatedApp
//             setCurrentUser={setCurrentUser}
//           />
//         )
//       }
//     </Router>
//   )
// }

// export default App









import './App.css';
import React from 'react';
import {useState} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Legal from './Components/Legal';
import Medical from './Components/Medical';
import Community from './Components/Community';
import UserHome from './Components/UserHome';
import Home from './Components/Home';

function App() {
  const [page, setPage] = useState("/")
  return (

    <div className="box">
        <h1>AFTERMATH NYC</h1>
       <BrowserRouter> 
        <NavBar onChangePage={setPage} />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/legal">
                <Legal />
            </Route>
            <Route path="/medical"> 
                <Medical />
            </Route>
            <Route path="/community_resources">
                <Community />
            </Route>
            <Route exact path="/home">
                <UserHome />
            </Route>
                        <Route path="*">
                <h1>404 not found</h1>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

