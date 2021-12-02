import { Component } from "react";
import Form from "../../components/Login/Form";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Bar from "../../components/Bar";
import "./Login.css";
class Login extends Component {
  componentDidMount() {
    document.title = "Login";
  }
  render() {
    return (
      <div className="bg-secondary">
        <Bar />
        <Container>
          <Row>
            <Col />
            <Col xs={8}>
              <Form />
            </Col>
            <Col />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
