import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateProduct() {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id
  const [productname, setProductName] = useState('')
  const [imageurl, setImageUrl] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')

  console.log({ productname, imageurl, price, description })

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    console.log(id)
    let result = await fetch(`http://localhost:8080/product/product/${id}`)
    result = await result.json()
    console.warn(result)

    setProductName(result[0].name)
    setImageUrl(result[0].imageURL)
    setPrice(result[0].price)
    setDescription(result[0].description)
    setCategoryId(result[0].categoryId)
  }

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
      .post(`http://localhost:8080/product/update/${id}`, {
        name: productname,
        imageURL: imageurl,
        price: price,
        description: description,
        categoryId: categoryId,
      })
      .then((res) => {
        alert(res.data.message)
        console.log(res.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div>Update Products</div>
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
    </div>
  )
}

export default UpdateProduct
