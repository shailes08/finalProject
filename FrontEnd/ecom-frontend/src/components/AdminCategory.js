import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartList from './CartList'
function AdminCategory() {
  const navigate = useNavigate()
  return (
    <>
      <CartList></CartList>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default AdminCategory
