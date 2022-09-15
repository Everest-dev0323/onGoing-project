import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { ButtonCheckBox } from "../shared/buttonCheckBox/ButtonCheckBox";
import { CustomSlider } from "../shared/customSlider/CustomSlider";
import { PriceView } from "./PriceView";

import icon1 from "../../imgs/price-section/icon1-1.svg";
import iconChecked1 from "../../imgs/price-section/icon1-1-checked.svg";
import icon2 from "../../imgs/price-section/icon1-2.svg";
import iconChecked2 from "../../imgs/price-section/icon1-2-checked.svg";
import icon3 from "../../imgs/price-section/icon1-3.svg";
import iconChecked3 from "../../imgs/price-section/icon1-3-checked.svg";

const InvoicePrice = ({}) => {
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [processedPageCountPerMonth, setProcessedPageCountPerMonth] =
    useState(100);
  const [step, setStep] = useState(100);
  const [price, setPrice] = useState("Free");

  useEffect(() => {
    setTotalPrice(processedPageCountPerMonth);
  }, [isChecked2, isChecked3]);

  const setValue = (val) => {
    if (val >= 1000) setStep(1000);
    else setStep(100);
    if (val < 100) val = 100;
    setProcessedPageCountPerMonth(val);
    setTotalPrice(val);
  };

  const setTotalPrice = (val) => {
    let basic_price = 24.99 + val * 0.005;
    let line_item_price = isChecked2 ? val * 0.01 : 0;
    let ml_price = isChecked3 ? val * 0.02 : 0;
    let temp = Math.ceil(basic_price + line_item_price + ml_price);
    if (val <= 100) setPrice("Free");
    else if (val >= 100000) setPrice("Enquiry");
    else setPrice("$" + temp);
  };

  return (
    <Row>
      <Col lg={7} md={12} className="price-setting">
        <div className="setting-description">
          <div>Select the features you wish to calculate pricing.</div>
          <div>(You can choose more than one).</div>
        </div>
        <div className="option-setting">
          <div className="d-flex flex-row flex-wrap">
            <ButtonCheckBox
              icon={icon1}
              iconChecked={iconChecked1}
              label="Basic Fields"
              isChecked={isChecked1}
              onChange={() => setIsChecked1(true)}
            />
            <ButtonCheckBox
              icon={icon2}
              iconChecked={iconChecked2}
              label="Line item Extraction"
              isChecked={isChecked2}
              onChange={(val) => setIsChecked2(val)}
            />
            <ButtonCheckBox
              icon={icon3}
              iconChecked={iconChecked3}
              label="Advanced ML"
              isChecked={isChecked3}
              onChange={(val) => setIsChecked3(val)}
            />
          </div>
        </div>
        <div className="page-count-slider">
          <div className=" slider-description">
            <span className="description">No of Pages</span>
            <span className="description">
              Processed/per month
              <span className="count">{processedPageCountPerMonth}</span>
            </span>
          </div>
          <div className="slider-panel">
            <CustomSlider
              value={processedPageCountPerMonth}
              setValue={setValue}
              min={0}
              max={100000}
              step={step}
            />
          </div>
        </div>
      </Col>
      <Col lg={5} md={12} className="price-view">
        <PriceView price={price} />
      </Col>
    </Row>
  );
};

export { InvoicePrice };
