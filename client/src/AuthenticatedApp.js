import './App.css';
import React from 'react'
import {useState} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Legal from './Components/Legal';
import Medical from './Components/Medical';
import Community from './Components/Community';
import UserHome from './Components/UserHome';
import Home from './Components/Home';


function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const [page, setPage] = useState("/")

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
        }
      })
  }
  return (
    <div className="box">
        <h1>aftermath nyc</h1>
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

export default AuthenticatedApp;



















// import './App.css';
// import React, {useState} from 'react';
// import { Switch, Route, useHistory } from 'react-router-dom'

// function AuthenticatedApp ({ currentUser, setCurrentUser }) {

//   const [newUserName, setNewUserName] = useState ('')  

//   const history = useHistory()
  
//     const handleLogout = () => {
//       fetch('/logout', {
//       method: 'DELETE',
//       credentials: 'include'
//       })
//       .then(res => {
//           if (res.ok) {
//           setCurrentUser(null)
//           history.push('/')
//           }
//       })
//     }

//     const updateUsername = () => {
//       const id = currentUser.id
//       fetch(`/users/${id}`, {
//         method: 'PATCH',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({username: newUserName })

//       })
//         .then(res => {
//           if(res.ok) {
//             // console.log(res)
//           } else {
//             res.json().then(console.log)
//           }
//         })

//     }
//     //////// Sobaata and Sam Delete Syntax ///////////////////

//     const handleDeleteAccount = (id) => {
//       fetch(`/users/${id}`, {
//       method: 'DELETE',
//       credentials: 'include'
//       })
//       .then(res => {
//           if (res.ok) {
//           // console.log(res)
//           history.push('/')
//           } else {
//             res.json().then(console.log)
//           }
//       })
//     }



//     ////////////////////////////////////

//     return (
//         <div className="App">
//           <nav>
//             <span>
//               {/* <NavLink to="/game">Game</NavLink>{" - "} */}
//               {/* <NavLink to="/events">Events</NavLink> */}
//             </span>
//             <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
//           </nav>
//           {/* / */}

//           <form onSubmit= {(e) => {
//             e.preventDefault() 
//             // updateUsername(currentUser.id)
//             updateUsername()
//           } }
//             >
//             Update Username
//             <input type="text" placeholder="New Username" value = {newUserName} onChange = {(e) => setNewUserName(e.target.value)} />
//             <button type='submit'>Update</button>
//           </form>

//           <button onClick= {() => handleDeleteAccount(currentUser.id)}>Delete Account</button>
//           <Switch>
//             <Route path="/game">
//               {/* <Game /> */}
//             </Route>
//           </Switch>
//         </div>
//       );
// }


// export default AuthenticatedApp;