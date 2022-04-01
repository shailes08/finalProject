import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function AdminProductList() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/product/')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })
      .catch((error) => {
        console.log(error)
        alert('something went wrong')
      })
  }, [])
  const navigate = useNavigate()
  return (
    <div>
      Products:
      {data.map((info) => (
        <div>
          <p>{info.id}</p>
          <img src={info.imageURL} alt="category"></img>
          <h1>{info.name}</h1>
          <p>{info.description}</p>
          <p>{info.price}</p>
          <Link to={{ pathname: '/admin/products/updateproducts/' + info.id }}>
            <button>Update Products</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default AdminProductList
