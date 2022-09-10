import React from 'react';
import {
    Container, 
    Navbar, 
    Nav, 
    Button
} from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'

import Logo from '../../../imgs/logo.png'

import './Header.scss';

const Header = () => (
    <div className="header">        
        <Navbar collapseOnSelect expand="lg">
            <Container className="navbar-container">
                <Navbar.Brand href="#" className='logo'>
                    <img src={Logo} alt="settings"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="menu-list">
                        <Nav.Link href="#">
                            <Button className='login-btn'><span className='login-text'>Log in</span></Button>
                        </Nav.Link>
                        <Nav.Link href="#">
                            <Button className='start-free-btn'><span className='start-free-text'>Get Started Free</span></Button>
                        </Nav.Link>                                  
                    </Nav>
                </Navbar.Collapse>                
            </Container>
        </Navbar>        
    </div>
);

export { Header };