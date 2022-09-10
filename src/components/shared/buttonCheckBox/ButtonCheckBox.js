import React from "react";
import CheckIcon from '../../../imgs/price-section/checked.png'

import './ButtonCheckBox.scss'

const ButtonCheckBox = ({icon, iconChecked, label, isChecked, onChange}) => {

  return (
    <label className={`main-area ${isChecked ? "checkbox--active" : ""}`}>
      <input
        className="d-none"
        type="checkbox"
        onChange={() => {
          onChange(!isChecked);
        }}
      />
      <div
        className="d-flex flex-row justify-content-between checkbox"
        aria-hidden="true"
      >
        <div className="d-flex flex-row align-items-center option-info">
          <img className="option-icon" src={icon} alt="icon"/>
          <img className="option-icon-checked" src={iconChecked} alt="iconChecked"/>
          <span className="option-name">{label}</span>
        </div>
        <div>
         <img className="check-icon" src={CheckIcon} alt="CheckIcon"/>
        </div>
      </div>
    </label>
  );
}

export { ButtonCheckBox };