import React, { useContext } from 'react'
import DataContext from '../Context/DataContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const { title } = useContext(DataContext);
    return (
        <>
            <header className='header'>
                <Navbar expand="lg" bg='primary' data-bs-theme='light'>
                    <Container>
                        <Navbar.Brand href="#home">{title}</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" style={{width: '100%', justifyContent: 'flex-end'}}>
                                <Nav.Link href="home">Home</Nav.Link>
                                <Nav.Link href="link">Link</Nav.Link>
                                <Nav.Link href="about">About</Nav.Link>
                                <Nav.Link href='contact'>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header