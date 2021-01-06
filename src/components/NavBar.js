import React from 'react'
import {Nav, Navbar, Image } from 'react-bootstrap';
import './NavBar.css'

function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav' >
            <Navbar.Brand href="#/" className='nav-color'>
                <Image src='/logo.png' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
                 <Nav className="mr-auto">
                </Nav> 
                <Nav className='nav-right'>
                <Nav.Link href="#/" className='nav-color'>Home</Nav.Link>
                <Nav.Link href="#About" className='nav-color'>About me</Nav.Link>
                <Nav.Link href="#Products" className='nav-color'>Products</Nav.Link>
                <Nav.Link href="#Service" className='nav-color'>Service</Nav.Link>
                </Nav> 
            </Navbar.Collapse>
            </Navbar> 
        </>
    )
}

export default NavBar
