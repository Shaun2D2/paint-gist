import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

const PrimaryNav = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Paint Gist</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        stuff
    </Navbar.Collapse>
  </Navbar>
);

export default PrimaryNav;
