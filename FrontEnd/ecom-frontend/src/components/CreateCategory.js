import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateCategory() {
  const [categoryname, setCategoryName] = useState('')
  const [imageurl, setImageUrl] = useState('')
  const [description, setDescription] = useState('')

  console.log({ categoryname, imageurl, description })

  const handleCategoryName = (e) => {
    setCategoryName(e.target.value)
  }
  const handleImageUrl = (e) => {
    setImageUrl(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const navigate = useNavigate()
  const handleApi = () => {
    axios
      .post('http://localhost:8080/category/create', {
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
      <button onClick={handleApi}>Add Category</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  )
}

export default CreateCategory
