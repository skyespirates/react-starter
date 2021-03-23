import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function About() {
  return (
    <Container>
      <Row>
        <Col md={6} className="mx-auto">
          <h1 className="text-center">About</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            dolore, sed alias deserunt error autem maxime veritatis sunt enim
            asperiores quia recusandae sit provident ipsa earum, quae voluptatum
            consequatur et?
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            dolore, sed alias deserunt error autem maxime veritatis sunt enim
            asperiores quia recusandae sit provident ipsa earum, quae voluptatum
            consequatur et?
          </p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            dolore, sed alias deserunt error autem maxime veritatis sunt enim
            asperiores quia recusandae sit provident ipsa earum, quae voluptatum
            consequatur et?
          </p>
        </Col>
      </Row>
    </Container>
  );
}
