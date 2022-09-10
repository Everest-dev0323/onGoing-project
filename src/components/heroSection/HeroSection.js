import React from "react"
import { Row, Col, Button } from 'react-bootstrap'
import Lottie from 'react-lottie';
import animationData from '../../utils/lf20_5jhirz28.json';

import Rectangle103 from '../../imgs/hero-section/Rectangle-103.png'
import Ellipse24 from '../../imgs/hero-section/Ellipse-24.png'
import Group from '../../imgs/hero-section/Group.png'
import Group2 from '../../imgs/hero-section/Group-2.png'
import Polygon8 from '../../imgs/hero-section/Polygon-8.png'
import Polygon9 from '../../imgs/hero-section/Polygon-9.png'
import Polygon10 from '../../imgs/hero-section/Polygon-10.png'
import Polygon11 from '../../imgs/hero-section/Polygon-11.png'
import Vector11 from '../../imgs/hero-section/Vector-11.png'
import Vector12 from '../../imgs/hero-section/Vector-12.png'
import Vector31 from '../../imgs/hero-section/Vector-31.png'
import Vector32 from '../../imgs/hero-section/Vector-32.png'
import Vector33 from '../../imgs/hero-section/Vector-33.png'
import EcommerceIcon from '../../imgs/ecommerce-icon.png'
import InvoiceIcon from '../../imgs/invoices-icon.png'

import './HeroSection.scss';

const HeroSection = ({isInvoicesFetchie, selectFetchie}) => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    function setFetchie(val) {
        selectFetchie(val)
    }

    return (
        <div className="hero-section">
            <img className="hero-section-imgs z-index--2 background-rectangle" src={Rectangle103} alt="Rectangle103"/>
            <img className="hero-section-imgs z-index--2 ellipse24" src={Ellipse24} alt="Ellipse24"/>
            <img className="hero-section-imgs z-index--2 group" src={Group} alt="Group"/>
            <img className="hero-section-imgs z-index--2 group2" src={Group2} alt="Group2"/>
            <img className="hero-section-imgs z-index--2 polygon8" src={Polygon8} alt="Polygon8"/>
            <img className="hero-section-imgs z-index--2 polygon9" src={Polygon9} alt="Polygon9"/>
            <img className="hero-section-imgs z-index--2 polygon10" src={Polygon10} alt="Polygon10"/>
            <img className="hero-section-imgs z-index--2 polygon11" src={Polygon11} alt="Polygon11"/>
            <img className="hero-section-imgs z-index--2 vector11" src={Vector11} alt="Vector11"/>
            <img className="hero-section-imgs z-index--2 vector12" src={Vector12} alt="Vector12"/>
            <img className="hero-section-imgs z-index--2 vector31" src={Vector31} alt="Vector31"/>
            <img className="hero-section-imgs z-index--2 vector32" src={Vector32} alt="Vector32"/>
            <img className="hero-section-imgs z-index--1 vector33" src={Vector33} alt="Vector33"/>
            <div className="z-index--1 lottie-dog">
                <Lottie options={defaultOptions}
                    height={280}
                    width={280}
                />
            </div>
            <div className="section-content">
                <Row className="text-center title-box">
                    <div>Good boy Fetchie!</div>
                    <div>Go and fetch those details!</div>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col className="fetchie-card">
                        <Button 
                            className={(isInvoicesFetchie ? "active" : "") + " d-flex flex-row align-items-center fetchie-btn invoice-btn"}
                            onClick={()=>{setFetchie(true)}}
                        >
                            <img className="InvoiceIcon" src={InvoiceIcon} alt="InvoiceIcon"/>
                            <div className="btn-label">
                                <div>Try Fetchie for</div>
                                <div>invoices</div>
                            </div>
                        </Button>
                        <div className="fetchie-explanation">
                            Give Fetchie a go and let him fetch the details from your invoices, ready to integrate with your financial/workflow software. 
                        </div>
                    </Col>
                    <Col className="fetchie-card">
                        <Button 
                            className={(isInvoicesFetchie ? "" : "active") + " d-flex flex-row align-items-center fetchie-btn ecommerce-btn"}
                            onClick={()=>{setFetchie(false)}}
                        >
                            <img className="EcommerceIcon" src={EcommerceIcon} alt="EcommerceIcon"/>
                            <div className="btn-label">
                                <div>Try Fetchie for</div>
                                <div>eCommerce</div>
                            </div>
                        </Button>
                        <div className="fetchie-explanation">
                            Hunt down the prices from websites you want to compare using Fetchie. Fetchie will chase off after those details and bring them back to you.
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
  };

export { HeroSection };