import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default function AppNavBar() {
  return (
    <Navbar bg="dark" expand="dark">
      <Container>
        <Navbar.Brand>CRUD Produtos</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
