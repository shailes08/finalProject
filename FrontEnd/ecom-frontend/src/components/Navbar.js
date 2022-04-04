import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className='subnav1'>
      <div>
        <NavLink to="/" className='Homealign'>Home</NavLink>
      </div>
      <div>
        <NavLink to="/login" className='Homealign'>Login</NavLink>
      </div>
      <div>
        <NavLink to="/signup" className='Homealign'>SignUp</NavLink>
      </div>
      <div>
        <NavLink to="/cart" className='Homealign'>Cart</NavLink>
      </div>
    </div>
  )
}

export default Navbar
