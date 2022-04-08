import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
import './SearchBar.css'
import { useState } from 'react'

function Navbar() {
  const navigate = useNavigate();
  const [product, SetProduct] = useState();

  const findProduct = (event) => {
    SetProduct(event.target.value);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/', { replace: true })
  }

  // const productFind = () => {
  //     axios.post('', {
  //         product: product
  //     })
  //         .then((result) => {
  //             Navigate('/');
  //         }).catch((error) => {
  //             alert("Sorry Product not available");
  //         })
  // }
  return (
    <div className='d-flex justify-content-center'>
      <div className='d-flex justify-content-evenly'>
        <div>
          <NavLink to="/showcategory" className='Homealign'>Show Category</NavLink>
        </div>
        <div>
          <NavLink to="/" className='Homealign'>Home</NavLink>
        </div>
        <div>
          <NavLink to="/signup" className='Homealign'>SignUp</NavLink>
        </div>
        <div>
          {sessionStorage.getItem('token') ? (
            <NavLink to="/cart" className='Cartalign'>Cart</NavLink>
          ) : null
          }
        </div>
        <div>
          {sessionStorage.getItem('token') ? (
            <button onClick={handleLogout} className='btn btn-dark me-4 text-light Homealign'>Sign Out</button>
          ) : <div>
            <NavLink to="/login" className='Homealign me-5'>Login</NavLink>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
