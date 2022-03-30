import React from 'react'
import { useNavigate } from 'react-router-dom'
function Addmin() {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/admin/products')}>
        Admin Products
      </button>
      <button onClick={() => navigate('/admin/category')}>
        Admin Category
      </button>
    </>
  )
}

export default Addmin
