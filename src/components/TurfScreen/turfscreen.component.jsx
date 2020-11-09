import React, { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Turf from "../../images/turf.jfif";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Carousel,
} from "react-bootstrap";
import "./turfscreen.styles.css"

const TurfScreen = ({ history, match }) => {
  return (
    <Fragment>
      <Link to="/turfs" className="btn btn-light my-3">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Carousel>
            <Carousel.Item interval={1000}>
              <img className="d-block w-100 carborrad" src={Turf} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img className="d-block w-100 carborrad" src={Turf} alt="Third slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 carborrad" src={Turf} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col variant="flush" md={3}>
          <ListGroup className="translucentdiv">
            <ListGroup.Item className="translucentdiv">
              <h5> Malad Turf </h5>
            </ListGroup.Item>
            <ListGroup.Item className="translucentdiv">Availability</ListGroup.Item>
            <ListGroup.Item className="translucentdiv">Price: $44</ListGroup.Item>
            <ListGroup.Item className="translucentdiv">Description: $66</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className="translucentdiv">
            <ListGroup variant="flush">
              <ListGroup.Item className="translucentdiv">
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>$76</strong>{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="translucentdiv">
                <Row>
                  <Col>Status:</Col>
                  <Col></Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item className="translucentdiv">
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control as="select"></Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item className="translucentdiv" >
                <Button className="btn-block" type="button">
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default TurfScreen;
