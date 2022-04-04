import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Address.css'
import Footer from './Footer'

function Address() {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')

  console.log({ address, city, state, pincode })

  const handleAddress = (e) => {
    setAddress(e.target.value)
  }

  const handleCity = (e) => {
    setCity(e.target.value)
  }

  const handleState = (e) => {
    setState(e.target.value)
  }

  const handlePincode = (e) => {
    setPincode(e.target.value)
  }

  var token = sessionStorage.getItem('token')
  console.log(token)
  const navigate = useNavigate()
  const handleApi = () => {
    axios
      .post(`http://localhost:8080/address/add/?token=${token}`, {
        addressLine1: address,
        city: city,
        state: state,
        pincode: pincode,
      })
      .then((res) => {
        console.log(res.data)
        navigate('/payment')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className='BoxDiv'>
        <div className='InnerBox'>
          <div>
            <div>
              Address:
              <br />
              <input value={address} onChange={handleAddress} type="text" className='InputBox' />
            </div>
            <br />
            <div>
              City:
              <br />
              <input value={city} onChange={handleCity} type="text" className='InputBox' />
            </div>
            <br />
            <div>
              State:
              <br />
              <input value={state} onChange={handleState} type="text" className='InputBox' />
            </div>
            <br />
            <div>
              Pincode:
              <br />
              <input value={pincode} onChange={handlePincode} type="text" className='InputBox' />
            </div>
            <br />
            <input type="button" value="Add Address" onClick={handleApi} className="AddressButton" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Address
