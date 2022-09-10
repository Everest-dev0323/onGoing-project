import React, { useState } from "react"
import { HeroSection } from '../components/heroSection/HeroSection'
import { InvoiceSection } from '../components/invoiceSection/InvoiceSection';
import { PriceSection } from '../components/priceSection/PriceSection';
import { ContactPanel } from "../components/contactFrom/ContactPanel";
import { ECommerceSection } from "../components/eCommerceSection/ECommerceSection";

import './index.scss';

const Home = () => { 
    
    const [isInvoicesFetchie, setIsInvoicesFetchie] = useState(true); // 1-invoices, 0-ecommerce
    const [isInvoicesPrice, setIsInvoicesPrice] = useState(true); // 1-invoices, 0-ecommerce

    function selectFetchie(val) {
        setIsInvoicesFetchie(val);
    }

    function selectPrice(val) {
        setIsInvoicesPrice(val)
    }

    return (
        <div className="home-main">
            <HeroSection isInvoicesFetchie={isInvoicesFetchie} selectFetchie={selectFetchie}/>
            {isInvoicesFetchie
                ? <InvoiceSection />
                : <ECommerceSection />
            }
            <PriceSection isInvoicesPrice={isInvoicesPrice} selectPrice={selectPrice}/>
            <ContactPanel />
        </div>
    )    
};

export { Home };