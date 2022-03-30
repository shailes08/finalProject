import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
      Address:
      <input value={address} onChange={handleAddress} type="text" />
      <br></br>
      City:
      <input value={city} onChange={handleCity} type="text" />
      <br></br>
      State:
      <input value={state} onChange={handleState} type="text" />
      <br></br>
      Pincode:
      <input value={pincode} onChange={handlePincode} type="number" />
      <br></br>
      <button onClick={handleApi}>Add Address</button>
    </div>
  )
}

export default Address
