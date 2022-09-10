import React, { useState, useRef } from "react"
import { Row, Col } from 'react-bootstrap'
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

import ContactFormImg from '../../imgs/contact-form-img.png'
import EyeImg from '../../imgs/eye.png'
import './ContactPanel.scss';

const ContactPanel = ({}) => {

    const [query, setQuery] = useState({
        name: "",
        email: "",
        message: "",
        "g-recaptcha-response": ""
    });
    const recaptchaRef = useRef();

    const onRecaptcha = (token) => {
        setQuery((prevState) => ({
            ...prevState,
            ["g-recaptcha-response"]: token
        }));
    }

    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(query["g-recaptcha-response"] == "") {
            recaptchaRef.current.getValue();
        }
        const formData = new FormData();
        Object.entries(query).forEach(([key, value]) => {
          formData.append(key, value);
        });
    };

    return (
        <Row className="contact-panel">
            <Col md={6} sm={12} className="contact-panel-info">
                <div className="contact-panel-subtitle">Fetchie has an impawsibly high accuracy rate.</div>
                <div className="contact-panel-title">Contact our Friendly team to learn more!</div>
                <div className="contact-panel-img-box">
                    <img src={ContactFormImg} alt="ContactFormImg"/>
                </div>
            </Col>
            <Col md={6} sm={12} className="contact-form-outer">
                <form className="contact-form-main" onSubmit={handleSubmit}>
                    <Row className="signup-form-input">
                        <div className="input-label">Name</div>
                        <input
                            type="text"
                            name="name"
                            value={query.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your name"
                            id="name"
                        />
                        <img className="eye-icon" src={EyeImg} alt="EyeImg"/>
                    </Row>
                    <Row className="signup-form-input">
                        <div className="input-label">Email</div>
                        <input
                            type="text"
                            name="email"
                            value={query.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Enter your email"
                            id="email"
                        />
                        <img className="eye-icon" src={EyeImg} alt="EyeImg"/>
                    </Row>
                    <Row className="signup-form-input">
                        <div className="input-label">Message</div>
                        <textarea
                            rows="3"
                            name="message"
                            value={query.message}
                            onChange={handleChange}
                            className="form-control message-input"
                            placeholder="Write your message"
                            id="message"
                        />
                        <img className="eye-icon" src={EyeImg} alt="EyeImg"/>
                    </Row>
                    <Row className="signup-form-captcha">
                        <ReCAPTCHA
                            sitekey="6LeGKaQgAAAAAAzOsB1ipbLEGSUXTZTZLaREHi0s"
                            ref={recaptchaRef}
                            onChange={onRecaptcha}
                        />
                    </Row>
                    <Row md={4} sm={12} className="submit-btn-outer">
                        <input
                            type="submit"
                            value="Submit"
                            disabled={query["g-recaptcha-response"] == "" ? true : false}
                            className="btn btn-success submit-btn"
                        />
                    </Row>
                </form>
            </Col>
            <Col md={6} sm={12} className="contact-panel-info-responsive">
                <div className="contact-panel-img-box-responsive">
                    <img src={ContactFormImg} alt="ContactFormImg"/>
                </div>
            </Col>
        </Row>
    );
  };

export { ContactPanel };
