import React from 'react'

import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"


const Navigation = () => {
  return (
    <Navbar variant="dark" className="bg-danger">
      <Container className="justify-content-start container d-flex justify-content-between">
        <div>
          <Link to="/" className="text-white ms-3 text-decoration-none">
            🏠 Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
            📒 Contacto
          </Link>
        </div>
        <div>
          <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation