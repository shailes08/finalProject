import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log({ email, password })

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    axios
      .post('http://localhost:8080/user/signin', {
        email: email,
        password: password,
      })
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      Email Id:
      <input value={email} onChange={handleEmail} type="email" />
      <br></br>
      Password:
      <input value={password} onChange={handlePassword} type="password" />
      <br></br>
      <button onClick={handleApi}>Login</button>
    </div>
  )
}

export default Login
