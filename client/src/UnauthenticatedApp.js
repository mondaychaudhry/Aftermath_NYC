import React, { Switch, Route, Redirect } from 'react-router-dom'
import {useEffect} from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'



function UnauthenticatedApp({ setCurrentUser }) {
    // const getFetchUsers = () => {
    //     fetch('/scripts')
    //     .then((response) => response.json())
    //     .then((fetchedUsers) => {
    //         console.log(fetchedUsers)
    //         // setUsers(fetchedUsers)
    //     })
    // }
    // useEffect(getFetchUsers, [])
    return (
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser}/>
        </Route>
        
        <Redirect to="/" />
      </Switch>
    )
  }

export default UnauthenticatedApp;