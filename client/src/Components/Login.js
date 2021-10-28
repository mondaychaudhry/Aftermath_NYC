import React, { useState } from 'react'
import { Redirect, useHistory, Link } from 'react-router-dom'

function Login({ setCurrentUser }) {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://127.0.0.1:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
        if (res.ok) {
          res.json().then(user => {
            setCurrentUser(user)
            history.push('/')
          })
        } else {
          setCurrentUser({ noUser: "x" })
          history.push('/')
          res.json().then(errors => {
            console.error(errors)
          })
        }
      })
  }
  return (
    <div className="box">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <h1>log in</h1>
        <p>
          <label 
            htmlFor="username"
          >
            username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label 
            htmlFor="password"
          >
            password
          </label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p><button type="submit">log in</button></p>
        <p>-- or --</p>
        <p><Link to="/signup">sign up</Link></p>
      </form>
    </div>
  )
}

export default Login