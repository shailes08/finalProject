import React from 'react'
import CategoryList from './CategoryList'
import Navbar from './Navbar'
import ProductList from './ProductList'

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <ProductList></ProductList>
      <CategoryList></CategoryList>
    </div>
  )
}

export default Home
