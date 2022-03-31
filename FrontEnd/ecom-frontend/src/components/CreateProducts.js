import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, withRouter } from 'react-router-dom'

function CreateProducts() {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}

export default CreateProducts
