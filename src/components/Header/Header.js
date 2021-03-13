import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img style={{width: '30px'}} src ={logo} alt=''></img> Vdemy</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#cart"><FontAwesomeIcon icon = {faCartPlus}></FontAwesomeIcon></Nav.Link>
          <Nav.Link><Button variant="outline-info">Login</Button></Nav.Link>
          <Nav.Link><Button variant="outline-info">Sign Up</Button></Nav.Link>
        </Nav>
          
          
        <Form inline>
          
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
        
    );
};

export default Header;