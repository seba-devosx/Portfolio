import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
//import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
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
                <Nav.Link href="/About">Sobre mi</Nav.Link>
                <Nav.Link href="/Skills">Habilidades</Nav.Link>
                <Nav.Link href="/Projects">Projectos</Nav.Link>
                <Nav.Link href="/Experience">Experiencia</Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1uM_sg-Em_CmR9Fp3VhrmxvFf_jptEOsq/view?usp=sharing" target="_blank" rel="noreferrer">Descarga CV</Nav.Link>
                <Button className="button_ld" variant="outline" onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
                </Button>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

