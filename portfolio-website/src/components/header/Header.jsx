import React from "react";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="left-side">KWASI-MENSAH</Navbar.Brand>
        <Navbar.Toggle className="nav-bar-toggle" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <div className="middle">
            <Nav.Link className="part" href="#about">ABOUT ME</Nav.Link>
            <Nav.Link className="part" href="#projects">PROJECTS</Nav.Link>
            <Nav.Link className="part" href="#contact-me">CONTACT ME</Nav.Link>
            </div>
            <div className="right-side">
            <Nav.Link href="#contact-me">HIRE ME</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
