import React from 'react';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';

const TopMenu = () => {
    return (
        <div >
            <Row>
                <Navbar fixed="top" bg="dark" variant="dark">
                    <Container className='justify-content-center'>
                        <Nav className='text-white'>
                            <Nav.Item>
                                <Nav.Link href="/home">Walton logo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' href="/home">Laptop</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-1">Desktop</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-2">All in One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-2">Monitor</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-2">Keyboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-2">Mouse</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-2">Pendrive</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-2">Headphone</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className='text-white' eventKey="link-2">Accessories</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Container>
                </Navbar>
            </Row>

            <Row className='mt-5'>
                <Navbar bg="secondary" variant="secondary" className="specific-menu">
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
            </Row>
        </div >
    );
};

export default TopMenu;