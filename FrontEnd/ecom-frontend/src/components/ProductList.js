import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

function ProductList() {
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
        </div>
      ))}
    </div>
  )
}

export default ProductList
