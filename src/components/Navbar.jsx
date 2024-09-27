import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiPluscodes } from "react-icons/si";

const NavigationBar = ({ toggleDarkMode, darkMode }) => {
  
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="/Home"><SiPluscodes/> Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='Navbarxd'>
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/About">Sobre-mi</Nav.Link>
                <Nav.Link href="/Skills">Habilidades</Nav.Link>
                <Nav.Link href="/Projects">Projectos</Nav.Link>
                <Nav.Link href="/Experience">Experiencia</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1V1fguKlzagvNHB8lf5hHABoKJDSyE5V0/view?usp=sharing" target="_blank" rel="noreferrer">Descarga CV</Nav.Link>
                <Button className="button_ld" variant="outline" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

