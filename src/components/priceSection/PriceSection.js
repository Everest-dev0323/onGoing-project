import React, {useState} from "react"
import { Row, Col } from 'react-bootstrap'
import { ToggleSwitch } from "../shared/toggleSwitch/ToggleSwitch"
import { InvoicePrice } from "./InvoicePrice";
import { ECommercePrice } from "./ECommercePrice";

import BgElement from '../../imgs/bg-elements.png'

import './PriceSection.scss';

const PriceSection = ({isInvoicesPrice, selectPrice}) => {
    const [status, setStatus] = useState(true);
    const onChange = (checked) => {
        selectPrice(checked)
        setStatus(!status)
    }

    return (
        <div className="price-section">
            {status&&<img className="z-index--2 bgElement" src={BgElement} alt="BgElement"/>}
            <Row className="text-center main-select justify-content-center">
                <div md={12} className="price-title">Simple, ComPETitive Pricing</div>
                <div className="price-select">
                    <ToggleSwitch
                        id="select-price"
                        checked={isInvoicesPrice}
                        onChange={onChange}
                    />
                </div>
            </Row>
            <Row>
                <Col md={10} sm={11} xs={11} className="invoice-price">
                    {isInvoicesPrice
                        ? <InvoicePrice />
                        : <ECommercePrice />
                    }
                </Col>
            </Row>
        </div>
    );
  };

export { PriceSection };
