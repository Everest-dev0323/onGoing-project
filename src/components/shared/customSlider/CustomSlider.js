import React, { useState } from "react";
import ReactSlider from "react-slider";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import './CustomSlider.scss'

const CustomSlider = ({min, max, step, value, setValue}) => {

  return (
    <div className="custom-slider-panel">
      <ReactSlider
        className="horizontal-slider"
        markClassName="slider-mark"
        value={value}
        onChange={(val) => setValue(val)}
        step={step}
        min={min}
        max={max}
        thumbClassName="slider-thumb"
        trackClassName="slider-track"
        renderThumb={(props, state) =>
          <div {...props}>
            <FaAngleLeft className="sidebar-icon" style={{color: '#a9a9a99c'}}/>
            <FaAngleRight className="sidebar-icon" style={{color: '#a9a9a99c'}}/>
          </div>
        }
      />
    </div>
  );
}

export { CustomSlider };
