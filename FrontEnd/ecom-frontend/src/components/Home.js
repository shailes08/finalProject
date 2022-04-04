import React from 'react'
import CategoryList from './CategoryList'
import Navbar from './Navbar'
import ProductList from './ProductList'
import './Home.css'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <div className='navbar'>
        <div className='subnav1'>
          <div>
            <Navbar></Navbar>
          </div>
        </div>
      </div>
      <ProductList></ProductList>
      <CategoryList></CategoryList>

      <Footer />
    </div>
  )
}

export default Home
