import logo from './logo.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import CategoryList from './components/CategoryList'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      {/* <Signup></Signup> */}
      {/* <Login></Login> */}
      {/* <CategoryList></CategoryList> */}
      <ProductList></ProductList>
    </div>
  )
}

export default App
