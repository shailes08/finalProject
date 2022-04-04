import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'bootstrap/dist/css/bootstrap.min.css'

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
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 16 }).map((_, idx) => (
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/100" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                <p>id</p>
                <h1>Name</h1>
                <p>Description</p>
                <p>Price</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))
      }
    </Row >
  )
}

export default ProductList
