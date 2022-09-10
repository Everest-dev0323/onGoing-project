import React, { useState, useRef } from "react"
import { Button, Row, Col } from 'react-bootstrap'
import ReCAPTCHA from "react-google-recaptcha";
import { FreeSignupPanel } from "../shared/freeSignupPanel/FreeSignupPanel"
import { ECommerceFeatures } from './ECommerceFeatures'

import CaptchaImg from '../../imgs/fetchie-section/Frame-9786.png'
import Ellipse33 from '../../imgs/fetchie-section/Ellipse-33.png'
import Group136 from '../../imgs/fetchie-section/Group-136.png'
import NoPriview from '../../imgs/fetchie-section/content-empty-img-ecommerce.png'
import DemoPicture from '../../imgs/fetchie-section/Rectangle-117.png'

import './ECommerceSection.scss';

const fileTypes = ['pdf'];

const ECommerceSection = () => { 
    const recaptchaRef = useRef();
    const [fetched, setFetched] = useState(false);
    const [ecommerceURL, setEcommerceURL] = useState(''); 

    const onChange = (e) => {
        recaptchaRef.current.execute();
        setEcommerceURL(e.target.value);
    }

    const onRecaptcha = (e) => {
        console.log("reCAPTCHA", e)
    }

    const clickFetch = () => {
        setFetched(true);
    }

    return (
        <Row className="ecommerce-section">
            <Col md={10} xs={12} className="ecommerce-main">
                <div className="ecommerce-inner-space">
                    <Row className='fetch-container'>
                        <Col sm={7} md={8} lg={9} xl={10} className="d-flex flex-row align-items-center url-fetch">
                            <input 
                                type="text" 
                                name="url" 
                                value={ecommerceURL}
                                onChange={onChange}
                                className="url-input"
                                placeholder="Enter an product page url to see how Fetchie extracts In-fur-mation."
                                id="url" 
                            />
                            <img src={CaptchaImg} alt="reCAPTCHA symbol" />
                            {/* <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LdrSaQgAAAAAFSDlKUqekGLo9JNGfgPuRi55MEg"
                                size="invisible"
                                onChange={onRecaptcha}
                            /> */}
                        </Col>
                        <Col sm={5} md={4} lg={3} xl={2} className="fetch-btn-container">
                            <Button className="fetch-btn" onClick={clickFetch}>Fetch</Button>
                        </Col>
                    </Row>
                    <Row className="main-panel">
                        {fetched
                            ? <>
                                <Col md={5} xs={12} className="picture-box">
                                    <img src={DemoPicture} alt="DemoPicture" />
                                </Col>
                                <Col md={7} xs={12} className="information">
                                    <div className="info-title">
                                        <div>MOTOROLA G60</div>
                                        <div>(Frosted Champagne, 128 GB)  (6 GB RAM)</div>
                                    </div>
                                    <div className="key-info">
                                        Product code:
                                        <span>2324t4tg</span>
                                    </div>
                                    <div className="key-info">
                                        Product Price:
                                        <span>$390</span>
                                        <span>$390</span>
                                    </div>
                                    <div className="description">
                                        The moto g60 enables you to capture spectacular selfies wherever you are, thanks to its 32 MP selfie camera, the Quad Pixel technology, and LED flash. Thanks to the smooth 17.2 cm (6.8) HDR10 Display, you can enjoy a lifelike experience while streaming content, gaming, and more. And, thanks to the powerful 6000 mAh battery, you can enjoy using your mobile phone for all that you need, without any low-battery interruptions for a long time.
                                    </div>
                                </Col>
                            </>
                            : <div className="no-preview">
                                <img className="no-preview-img" src={NoPriview} alt="no preview"/>
                                <div className="text-center no-preview-text">Upload an invoice to see how Fetchie</div>
                                <div className="text-center no-preview-text">extracts In-fur-mation.</div>
                            </div>
                        }
                    </Row>
                    <Row className="signup-section">
                        {fetched && <FreeSignupPanel />}
                    </Row>
                </div>
            </Col>
            <Col md={10} xs={12} className="ecommerce-features">
                <img className="z-index-2 ellipse33" src={Ellipse33} alt="Ellipse33" />
                <img className="group136" src={Group136} alt="Group136" />
                <ECommerceFeatures />
            </Col>
        </Row>
        
    )    
};

export { ECommerceSection };