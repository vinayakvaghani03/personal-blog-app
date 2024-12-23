import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" >
        <Container >
          <Navbar.Brand href="#">BLOGS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
               <Link className='nav-link' to="/" >Home</Link>
               <Link className='nav-link' to="/blogs" >Blogs</Link>
               <Link className='nav-link' to="/writeBlogs" >Write-Blogs</Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr/>
    </div>
  )
}

export default Header
