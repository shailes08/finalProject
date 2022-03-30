import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductList from './ProductList'
function AdminProducts() {
  const navigate = useNavigate()
  return (
    <>
      <ProductList></ProductList>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default AdminProducts
