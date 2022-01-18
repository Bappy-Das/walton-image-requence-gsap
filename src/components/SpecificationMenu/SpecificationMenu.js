import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import './SpecificationMenu.css'
const SpecificationMenu = () => {
    return (
        <div>

            <Navbar bg="secondary" variant="secondary" className="specific-menu mt-5 ">
                <Container>
                    <Navbar.Brand>Tramdid</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto p-2">
                            <Nav.Link href="#link" className='text-white'>Overview</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Tech Specs</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Picture Gallery</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Buy Now</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default SpecificationMenu;