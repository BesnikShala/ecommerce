import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listProductDetails } from "../actions/productActions";

function ProductScreen() {
  // render product details from store via actions and reducers
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { error, loading, product } = productDetails

  const { id } = useParams();

  useEffect(() => {
    dispatch(listProductDetails(id))
    
  }, [dispatch]);



  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? <Loader />
          : error ? <Message variant='danger'>{error}</Message>
          :
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>Price: £{product.price}</ListGroup.Item>

            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>£{product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Button
                  className="btn-black w-100"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>{" "}
        </Col>
      </Row>
      }
    </div>
  );
}

export default ProductScreen;
