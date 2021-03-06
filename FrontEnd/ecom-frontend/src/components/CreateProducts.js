import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function CreateProducts() {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id

  const [productname, setProductName] = useState('')
  const [imageurl, setImageUrl] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  console.log({ productname, imageurl, price, description })

  const handleProductName = (e) => {
    setProductName(e.target.value)
  }

  const handleImageUrl = (e) => {
    setImageUrl(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleApi = () => {
    axios
      .post('http://localhost:8080/product/add', {
        name: productname,
        imageURL: imageurl,
        price: price,
        description: description,
        categoryId: id,
      })
      .then((res) => {
        alert('product added successfully')
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h1>Add products in selected category</h1>
      Product Name:
      <input value={productname} onChange={handleProductName} type="text" />
      <br></br>
      Image URl:
      <input value={imageurl} onChange={handleImageUrl} type="text" />
      <br></br>
      Price:
      <input value={price} onChange={handlePrice} type="text" />
      <br></br>
      Description:
      <input value={description} onChange={handleDescription} type="text" />
      <br></br>
      <button onClick={handleApi}>Register</button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default CreateProducts
