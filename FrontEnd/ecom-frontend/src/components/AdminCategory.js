import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartList from './CartList'
function AdminCategory() {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/admin/products/addcategory')}>
        Create Category
      </button>
      <button onClick={() => navigate('/admin/category/categorylist')}>
        Get CategoryList
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default AdminCategory
