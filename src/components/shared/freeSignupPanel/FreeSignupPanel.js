import React, { useState } from "react"
import { Row, Col } from 'react-bootstrap'
import { validate as emailValidate, res as emailRes} from 'react-email-validator'

import Rectangle94 from '../../../imgs/fetchie-section/Rectangle-94.png'
import MaskGroup from '../../../imgs/fetchie-section/mask-group.png'
import Polygon18 from '../../../imgs/fetchie-section/Polygon-18.png'
import Polygon19 from '../../../imgs/fetchie-section/Polygon-19.png'
import Vector19 from '../../../imgs/fetchie-section/Vector-19.png'
import Vector20 from '../../../imgs/fetchie-section/Vector-20.png'
import Vector21 from '../../../imgs/fetchie-section/Vector-21.png'

import './FreeSignupPanel.scss'

const FreeSignupPanel = ({}) => {

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [isConfirmed, setIsConfirmed] = useState(true);

    const emailChange = (event) => {
        let temp = event.target.value;
        setEmail(temp);
        errors.email = null
        emailValidate(temp);
        errors.email = emailRes ? null : "Email is not valid!"
        if(temp == "") errors.email = null
        setErrors(errors)
    }

    const handleSignUp = (event) => {
        event.preventDefault();
    }

    const activateConfirm = (event) => {
        setIsConfirmed(event.target.checked)
    }

    return (
        <Row className="signup-panel">
            <img className="free-signup-imgs rectangle94" src={Rectangle94} alt="Rectangle94"/>
            <img className="free-signup-imgs mask-group" src={MaskGroup} alt="MaskGroup"/>
            <img className="free-signup-imgs z-index-1 polygon18" src={Polygon18} alt="Polygon18"/>
            <img className="free-signup-imgs z-index-1 polygon19" src={Polygon19} alt="Polygon19"/>
            <img className="free-signup-imgs z-index-1 vector19" src={Vector19} alt="Vector19"/>
            <img className="free-signup-imgs z-index-1 vector20" src={Vector20} alt="Vector20"/>
            <img className="free-signup-imgs z-index-1 vector21" src={Vector21} alt="Vector21"/>
            <Col md={6} sm={12} className="pl-4 signup-info">
                <div className="signup-description">Wasn’t that easy? Fetchie makes information capture a walk in the park.</div>
                <div className="signup-description-2">Sign-up for a free account, and start processing documents now!</div>
            </Col>
            <Col md={6} sm={12} className="signup-form-out">
                <form className="signup-form-main" onSubmit={handleSignUp}>
                    <Row className="signup-form-input">
                        <Col md={8} sm={6} className="p-0">
                            <div className="form-group email-input-box">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={emailChange}
                                    className="form-control email-input"
                                    placeholder="Enter your email"
                                    id="email"
                                />
                                <div className="error-alert">{errors.email}</div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} className="p-0">
                            <input type="submit" value="Submit" className="btn btn-success submit-btn" />
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    );
  };

export { FreeSignupPanel };
