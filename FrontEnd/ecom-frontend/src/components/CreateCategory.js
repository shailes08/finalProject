import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCategory.css'
import Footer from './Footer'

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
      <div className='BoxDiv'>
        <div className='InnerBox'>
          <div>
            <div>
              Category Name:
              <br />
              <input value={categoryname} onChange={handleCategoryName} type="text" className='InputBox' />
            </div>
            <br />
            <div>
              Image URL:
              <br />
              <input value={imageurl} onChange={handleImageUrl} type="text" className='InputBox' />
            </div>
            <br />
            <div>
              Description:
              <br />
              <input value={description} onChange={handleDescription} type="text" className='InputBox' />
            </div>
            <br />
            <input type="button" value="Add Category" onClick={handleApi} className='CategoryButton' />
            <input type="button" value="Back" onClick={() => navigate(-1)} className='BackButton' />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default CreateCategory
