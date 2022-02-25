import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => (
  <Navbar className="header" variant="">
    <Container className="header-content">
      <Navbar.Brand className="header-title">FLite# Playground </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="header-github">
          <a href="https://github.com/Rye-Catcher/FLS-playground-client/tree/master/">
            Github
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
