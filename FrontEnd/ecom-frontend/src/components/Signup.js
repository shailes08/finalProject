import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import './Signup.css'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


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
  const navigate = useNavigate()
  return (
    <div>
      <br />
      <Container className='d-flex justify-content-center'>
        <Row className='d-flex justify-content-center '>
          <div className='d-flex justify-content-center row g-2 col-md-4'>
            <div>
              First Name:{' '}
              <input value={firstname} onChange={handleFirstName} type="text" className='InputBox' />
            </div>
            <br />
            <div>
              Last Name:{' '}
              <br />
              <input value={lastname} onChange={handleLastName} type="text" className='InputBox' />
            </div>
            <br />
            <div>
              Email Id:
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
            <div>
              <input type="button" value="Register" className="RegisterButton" onClick={handleApi} />
            </div>
            <p> Already Register</p>
            <div>
              <input type="button" value="Login" className='RegisterButton' onClick={() => navigate('/login')} />
            </div>
            <br />
          </div>

        </Row>
      </Container>
      <br />
      <br />
      <Footer></Footer>
    </div>
  )
}

export default Signup
