import React from 'react'
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import Logo from '../assets/img/react.svg'

const NavBar = () => {

    return (
        <div className='navbar' id='navbar'>
            <Navbar className='w-100' collapseOnSelect expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home"><Image src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-between text-center' id="responsive-navbar-nav">
                        <Nav></Nav>
                        <Nav>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className='align-items-center'>
                            <Nav.Link href="#deets"><BsLinkedin /></Nav.Link>
                            <Nav.Link href="#deets"><BsGithub /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar