import React, { useState } from "react"
import { Row, Col } from 'react-bootstrap'
import { CustomSlider } from '../shared/customSlider/CustomSlider'
import { PriceView } from './PriceView'

const ECommercePrice = ({}) => {

  const [URLCountPerMonth, setURLCountPerMonth] = useState(1000);
  const [URLStep, setURLStep] = useState(1000);
  const [APICountPerMonth, setAPICountPerMonth] = useState(1);
  const [price, setPrice] = useState('Free');


  const setURLCount = (val) => {
    if(val >= 10000) setURLStep(10000)
    else setURLStep(1000)
    if(val < 1000) val = 1000
    if(val == 1000) setAPICountPerMonth(1)
    setURLCountPerMonth(val);
    setTotalPrice(val, APICountPerMonth);
  }

  const setAPICount = (val) => {
    if(val < 1 || URLCountPerMonth == 1000) val = 1
    setAPICountPerMonth(val)
    setTotalPrice(URLCountPerMonth, val);
  }

  const setTotalPrice = (URLCount, APICount) => {
    let temp = Math.ceil(24.9 + URLCount * 0.01 + APICount * 0.1)
    if(URLCount <= 1000) setPrice('Free')
    else if(URLCount >= 100000) setPrice('Enquiry')
    else setPrice('$' + temp)
  }

    return (
      <Row>
          <Col lg={7} md={12} className="price-setting">
              <div className="url-count-slider">
                  <div className=" slider-description">
                      <span className="description">Number of</span>
                      <span className="description">URLs/per month<span className="count">{URLCountPerMonth}</span></span>
                  </div>
                  <div className="slider-panel">
                      <CustomSlider 
                          value={URLCountPerMonth} 
                          setValue={setURLCount}
                          min={0}
                          max={100000}
                          step={URLStep}
                        />
                  </div>
              </div>
              <div className="api-count-slider">
                  <div className=" slider-description">
                      <span className="description">No of Pages</span>
                      <span className="description">Processed/per month<span className="count">{APICountPerMonth}</span></span>
                  </div>
                  <div className="slider-panel">
                      <CustomSlider 
                          value={APICountPerMonth} 
                          setValue={setAPICount}
                          min={1}
                          max={50}
                          step={1}
                      />
                  </div>
              </div>
          </Col>
          <Col lg={5} md={12} className="price-view">
              <PriceView price={price}/>
          </Col>
      </Row>
    );
};

export { ECommercePrice };