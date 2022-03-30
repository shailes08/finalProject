import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function CartList() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(
        'http://localhost:8080/cart/?token=814f6289-d38a-4867-8cac-f1700df85457',
      )
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
      CartList:
      {data.map((info) => (
        <div>
          <p>{info.quantity}</p>
          <img src={info.product.imageUrl} alt="category"></img>
          <h1>{info.product.name}</h1>
          <p>{info.product.description}</p>
          <p>{info.product.price}</p>
          <p>{info.totalCost}</p>
        </div>
      ))}
    </div>
  )
}

export default CartList
