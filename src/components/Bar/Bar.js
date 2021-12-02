import { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import pato from "./icons8-pato-de-borracha-100.png";
import "./Bar.css";
import github from "./icons8-github-50.png";
import twitter from "./icons8-twitter-50-black.png";
class Bar extends Component {
  render() {
    return (
      <Navbar className="bg-primary" variant="dark">
        <Navbar.Brand href="/">
          <img alt="" src={pato} width="50" height="50" />
          Pato React
        </Navbar.Brand>
        <Nav.Link href="https://twitter.com/di_ponto_gon">
          <img alt="" src={twitter} width="40" height="40" />
        </Nav.Link>
        <Nav.Link href="https://github.com/DiegoGonzaga">
          <img alt="" src={github} width="40" height="40" />
        </Nav.Link>
      </Navbar>
    );
  }
}

export default Bar;
