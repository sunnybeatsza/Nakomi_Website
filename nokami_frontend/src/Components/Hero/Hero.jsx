import React from "react";
import HeroImg from "../../Assets/Product_Leaves.jpg";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="Hero-section">
      {/* Hero Left */}
      <div className="Hero-Left">
        <div className="inner_left_div">
          <div className="nested_left_div">
            <p className="nested_line_1"></p>
            <p className="nested_lead_1">HAIR CARE REIMAGINED</p>
          </div>
          <h1 className="nested_heading">
            DISCOVER THE POWER OF
            <br />
            <br />
            NATURAL HAIR OIL
          </h1>
          <div className="nested_paragraph">
            <p className="nested_paragraph_1">SHOP NOW</p>
            <p className="nested_line_1"></p>
          </div>
        </div>
      </div>
      {/* Hero Right */}
      <div className="Hero-Right">
        <img src={HeroImg} alt="" id="HeroImg" />
      </div>
    </div>
  );
};
