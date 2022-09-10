import React from "react"
import { Row, Col } from 'react-bootstrap'
import Vector46 from '../../imgs/fetchie-section/Vector-46.png'
import Vector46Selected from '../../imgs/fetchie-section/Vector-46-selected.png'
import Group135_1 from  '../../imgs/fetchie-section/Group-135-1.png'
import Group135_2 from  '../../imgs/fetchie-section/Group-135-2.png'
import Group135_3 from  '../../imgs/fetchie-section/Group-135-3.png'
import Group135_4 from  '../../imgs/fetchie-section/Group-135-4.png'
import Group135_5 from  '../../imgs/fetchie-section/Group-135-5.png'
import Group135_6 from  '../../imgs/fetchie-section/Group-135-6.png'
import Vector50_1 from  '../../imgs/fetchie-section/Vector-50-1.svg'
import Vector50_2 from  '../../imgs/fetchie-section/Vector-50-2.svg'
import Vector50_3 from  '../../imgs/fetchie-section/Vector-50-3.svg'
import Vector50_4 from  '../../imgs/fetchie-section/Vector-50-4.svg'
import Vector50_5 from  '../../imgs/fetchie-section/Vector-50-5.svg'
import Vector50_6 from  '../../imgs/fetchie-section/Vector-50-6.svg'

const InvoiceFeatures = ({ }) => {

    return (
        <>
            <Row className="text-center feature-title-bar">
                <Col md={12} className="title-top">FEATURES</Col>
                <Col md={12} className="title-main">Fetchie for invoices</Col>
                <Col md={8} sm={12} className="align-center description">
                    Fetchie is a data extraction program designed to read and understand document information and “fetch” the important details for data extraction. Fetchie uses his advanced AI (artificial intelligence)Cognitive Capture technology (NLP Natural Language Processingand ML (Machine learning) to read and understand what details you need extracted from documents.
                </Col>
            </Row>
            <Row className="feature-list">
                <Col lg={4} md={6} sm={6} xs={12} className="feature-item vector50_1_item">
                    <img className="item-background" src={Vector46} alt="Vector46" />
                    <img className="Vector46Selected" src={Vector46Selected} alt="Vector46Selected" />
                    <img className="hover-background vector50_1" src={Vector50_1} alt="Vector50_1" />
                    <div className="item-content">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="feature-item-title">AI + ML + OCR</span>
                            <img className="align-right group135" src={Group135_1} alt="Group135_1" />
                        </div>
                        <div className="item-description">
                            Fetchie has an advanced pet-degree in artificial intelligence, machine learning, and cognitive capture, the paw-fect skills needed to extract key fields and line items from invoices.
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="feature-item vector50_2_item">
                    <img className="item-background" src={Vector46} alt="Vector46" />
                    <img className="Vector46Selected" src={Vector46Selected} alt="Vector46Selected" />
                    <img className="hover-background vector50_2" src={Vector50_2} alt="Vector50_2" />
                    <div className="item-content">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="feature-item-title">No Templates, No Training Required</span>
                            <img className="align-right group135" src={Group135_2} alt="Group135_2" />
                        </div>
                        <div className="item-description">
                            No puppy training is required, Fetchie is ready to capture data without any template configuration.
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="feature-item vector50_3_item">
                    <img className="item-background" src={Vector46} alt="Vector46" />
                    <img className="Vector46Selected" src={Vector46Selected} alt="Vector46Selected" />
                    <img className="hover-background vector50_3" src={Vector50_3} alt="Vector50_3" />
                    <div className="item-content">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="feature-item-title">Automated Data Entry</span>
                            <img className="align-right group135" src={Group135_3} alt="Group135_3" />
                        </div>
                        <div className="item-description">
                            Everything is paw-sible with Fetchie, we support data extraction from images captured by smartphones, scanned documents, and PDFs.
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="feature-item  vector50_4_item">
                    <img className="item-background" src={Vector46} alt="Vector46" />
                    <img className="Vector46Selected" src={Vector46Selected} alt="Vector46Selected" />
                    <img className="hover-background vector50_4" src={Vector50_4} alt="Vector50_4" />
                    <div className="item-content">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="feature-item-title">Invoice Capture, Guaranteed</span>
                            <img className="align-right group135" src={Group135_4} alt="Group135_4" />
                        </div>
                        <div className="item-description">
                            Forward your supplier emails with the attached invoices, and Fetchie will bring back all the invoice information including SKU level line items.
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="feature-item  vector50_5_item">
                    <img className="item-background" src={Vector46} alt="Vector46" />
                    <img className="Vector46Selected" src={Vector46Selected} alt="Vector46Selected" />
                    <img className="hover-background vector50_5" src={Vector50_5} alt="Vector50_5" />
                    <div className="item-content">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="feature-item-title">Format & Rules Engine </span>
                            <img className="align-right group135" src={Group135_5} alt="Group135_5" />
                        </div>
                        <div className="item-description">
                            Go mutts with data extraction configuration rules, use our industry best practice rules engine or enable & disable the data formats you pre-fur.
                        </div>
                    </div>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12} className="feature-item  vector50_6_item">
                    <img className="item-background" src={Vector46} alt="Vector46" />
                    <img className="hover-background vector50_6" src={Vector50_6} alt="Vector50_6" />
                    <div className="item-content">
                        <div className="d-flex flex-row justify-content-between align-items-center">
                            <span className="feature-item-title">API & Webhooks</span>
                            <img className="align-right group135" src={Group135_6} alt="Group135_6" />
                        </div>
                        <div className="item-description">
                            You won’t be barking up the wrong tree with Fetchie, use a secure API for your business application, or we can deliver your processed invoices using a configurable webhook.
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
  };

export { InvoiceFeatures };
