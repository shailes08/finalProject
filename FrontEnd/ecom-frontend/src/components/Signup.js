import axios from 'axios'
import React, { useState } from 'react'

function Signup() {
  const [firstname, setfirstName] = useState('')
  const [lastname, setLasttName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  console.log({ email, password, firstname, lastname })

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleFirstName = (e) => {
    setfirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLasttName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    axios
      .post('http://localhost:8080/user/signup', {
        firstName: firstname,
        lastName: lastname,
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
      First Name:{' '}
      <input value={firstname} onChange={handleFirstName} type="text" />
      <br></br>
      Last Name:{' '}
      <input value={lastname} onChange={handleLastName} type="text" />
      <br></br>
      Email Id:
      <input value={email} onChange={handleEmail} type="email" />
      <br></br>
      Password:
      <input value={password} onChange={handlePassword} type="password" />
      <br></br>
      <button onClick={handleApi}>Register</button>
    </div>
  )
}

export default Signup
