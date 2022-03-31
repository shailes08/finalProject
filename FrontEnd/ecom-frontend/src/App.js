import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'
import CartList from './components/CartList'
import Home from './components/Home'
import Payment from './components/Payment'
import Address from './components/Address'
import Addmin from './components/Addmin'
import AdminCategory from './components/AdminCategory'
import AdminProducts from './components/AdminProducts'
import CreateCategory from './components/CreateCategory'
import CreateProducts from './components/CreateProducts'
import Nomatch from './components/Nomatch'

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="admin" element={<Addmin />}></Route>
      <Route path="/admin/category" element={<AdminCategory />}></Route>
      <Route path="/admin/products" element={<AdminProducts />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="cart" element={<CartList />}></Route>
      <Route path="address" element={<Address />}></Route>
      <Route path="payment" element={<Payment />}></Route>
      <Route
        path="/admin/products/addcategory"
        element={<CreateCategory />}
      ></Route>
      <Route
        path="/admin/products/addproducts/:id"
        element={<CreateProducts />}
      ></Route>
      <Route path="*" element={<Nomatch />}></Route>
    </Routes>
  )
}

export default App
