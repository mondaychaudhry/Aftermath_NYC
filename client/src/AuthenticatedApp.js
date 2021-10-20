import './App.css';
import React, {useState} from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'

function AuthenticatedApp ({ currentUser, setCurrentUser }) {

  const [newUserName, setNewUserName] = useState ('')  

  const history = useHistory()
  
    const handleLogout = () => {
      fetch('/logout', {
      method: 'DELETE',
      credentials: 'include'
      })
      .then(res => {
          if (res.ok) {
          setCurrentUser(null)
          history.push('/')
          }
      })
    }

    const updateUsername = () => {
      const id = currentUser.id
      fetch(`/users/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: newUserName })

      })
        .then(res => {
          if(res.ok) {
            // console.log(res)
          } else {
            res.json().then(console.log)
          }
        })

    }
    //////// Sobaata and Sam Delete Syntax ///////////////////

    const handleDeleteAccount = (id) => {
      fetch(`/users/${id}`, {
      method: 'DELETE',
      credentials: 'include'
      })
      .then(res => {
          if (res.ok) {
          // console.log(res)
          history.push('/')
          } else {
            res.json().then(console.log)
          }
      })
    }



    ////////////////////////////////////

    return (
        <div className="App">
          <nav>
            <span>
              {/* <NavLink to="/game">Game</NavLink>{" - "} */}
              {/* <NavLink to="/events">Events</NavLink> */}
            </span>
            <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
          </nav>
          {/* / */}

          <form onSubmit= {(e) => {
            e.preventDefault() 
            // updateUsername(currentUser.id)
            updateUsername()
          } }
            >
            Update Username
            <input type="text" placeholder="New Username" value = {newUserName} onChange = {(e) => setNewUserName(e.target.value)} />
            <button type='submit'>Update</button>
          </form>

          <button onClick= {() => handleDeleteAccount(currentUser.id)}>Delete Account</button>
          <Switch>
            <Route path="/game">
              {/* <Game /> */}
            </Route>
          </Switch>
        </div>
      );
}


export default AuthenticatedApp;