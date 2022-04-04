import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import Footer from './Footer'

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

  const navigate = useNavigate()
  const handleApi = () => {
    axios
      .post('http://localhost:8080/user/signin', {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res.data)
        if (res.data.token === 'a31d756e-46ad-4ccb-b16b-c9371948a5be') {
          console.log('Redirect to admin')

          //saving token in session
          sessionStorage.setItem(
            'token',
            '1c2cba40-688b-4926-a2d2-dbd4abb97823',
          )
          navigate('/admin')
          //reading token from session
          let token = sessionStorage.getItem('token')
          console.log(token)
        } else if (res.data.token.length) {
          console.log('Redirect to user')
          sessionStorage.setItem('token', res.data.token)
          navigate('/')
        }
      })
      .catch((error) => {
        alert('Wrong Credentials')
        navigate('/login')
        console.log(error)
      })
  }

  return (
    <div>
      <div className='BoxDiv'>
        <div className='InnerBox'>
          <div>
            <div>
              Email:
              <br />
              <input value={email} onChange={handleEmail} type="email" className='InputBox' />
            </div>
            <br />
            <div>
              Password:
              <br />
              <input value={password} onChange={handlePassword} type="password" className='InputBox' />
            </div>
            <br />
            <button onClick={handleApi} className="LoginButton">Login</button>
            <button onClick={() => navigate('/signup')} className="SignUpButton">Sign Up</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Login
