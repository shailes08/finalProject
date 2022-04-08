import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function AdminProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/category/list")
      .then((res) => {
        console.log(res.data);

        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("something went wrong");
      });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Row xs={1} md={4} className="g-4">
          {data.map((info) => (
            <Col>
              <Card style={{ width: "24rem" }}>
                <Card.Img src={info.imageUrl} />
                <Card.Body>
                  <Card.Title>Name : {info.categoryName}</Card.Title>
                  <Card.Text>Desc : {info.description}</Card.Text>
                  <Link
                    to={{
                      pathname: "/admin/products/addproducts/" + info.id,
                    }}
                  >
                    <Button variant="warning">Add Product in Category</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div className="d-flex justify-content-evenly">
        <button type="button" class="btn btn-warning mt-4" onClick={() => navigate("/admin/product/productlist")}>
          Update Product
        </button>
        <button class="btn btn-warning mt-4" onClick={() => navigate(-1)}>Go back</button>
      </div>
    </>
  );
}

export default AdminProducts;
