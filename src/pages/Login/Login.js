import { Component } from "react";
import Form from "../../components/Login/Form";
import { Container, Row, Col, Stack } from "react-bootstrap";
import "./Login.css";
class Login extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col />
          <Col xs={8}>
            <Form />
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default Login;
