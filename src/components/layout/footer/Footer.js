import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { FaRegCopyright } from 'react-icons/fa';

import FooterLogo from '../../../imgs/footer-logo.png'

import './Footer.scss';

const Footer = () => (
    <div className="footer">        
        <Row className="d-flex align-items-center justify-content-between footer-info">
            <Col md={9} sm={12}>
                <Row className="d-flex align-items-center">
                    <Col md={4} sm={5} xs={12} className="d-flex flex-row align-items-center">
                        <FaRegCopyright className="copyright-icon"/>
                        <span>All rights reserved by fetchie</span>
                    </Col>
                    <Col md={2} sm={3} xs={12}><a href="#">Privacy Policy</a></Col>
                    <Col md={3} sm={4} xs={12}><a href="#">Terms of Usage</a></Col>
                </Row>
            </Col>
            <Col md={3} sm={12} className="footer-logo-box">
                <a href="/" className='footer-logo' aria-hidden="true">
                    <img src={FooterLogo} alt="settings"/>
                </a>
            </Col>
        </Row>
    </div>
);

export { Footer };