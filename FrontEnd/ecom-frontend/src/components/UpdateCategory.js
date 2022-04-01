import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UpdateCategory() {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.id

  const [categoryname, setCategoryName] = useState('')
  const [imageurl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')

  console.log({ categoryname, imageurl, description })

  useEffect(() => {
    getCategoryDetails()
  }, [])

  const getCategoryDetails = async () => {
    console.log(id)
    let result = await fetch(`http://localhost:8080/category/getcategory/${id}`)
    result = await result.json()
    console.warn(result)

    setCategoryName(result.categoryName)
    setImageUrl(result.imageUrl)
    setDescription(result.description)
  }

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value)
  }
  const handleImageUrl = (e) => {
    setImageUrl(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleApi = () => {
    axios
      .post(`http://localhost:8080/category/update/${id}`, {
        categoryName: categoryname,
        imageUrl: imageurl,
        description: description,
      })
      .then((result) => {
        console.log(result.data)
        alert(result.data.message)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      Category Name:
      <input value={categoryname} onChange={handleCategoryName} type="text" />
      <br></br>
      Image URL:
      <input value={imageurl} onChange={handleImageUrl} type="text" />
      <br></br>
      Description:
      <input value={description} onChange={handleDescription} type="text" />
      <br></br>
      <button onClick={handleApi}>Save</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default UpdateCategory
