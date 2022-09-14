import React from "react"
import { Button, Card } from 'react-bootstrap'

const PriceView = ({price}) => {

    return (
        <Card>
            <Card.Subtitle className="price-view-subtitle">Total Price</Card.Subtitle>
            <Card.Title className="price-view-price">{price}</Card.Title>
            <Card.Text className="price-view-based">Monthly</Card.Text>
            <Card.Text className="price-view-description">Fetchie can be your furever data extraction pet!</Card.Text>
            <Button className="price-view-button" variant="primary">Get Started for Free</Button>
        </Card>
    );
  };

export { PriceView };
