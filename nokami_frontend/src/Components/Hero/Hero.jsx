import React from "react";
import "./Hero.css";
import HeroImg from "../../Assets/Product_Leaves.jpg";

export const Hero = () => {
  return (
    <div className="Hero-section">
      <div className="box box1">
        <p>Lorem ipsum dolor sit amet,</p>
      </div>
      <div className="box box2">
        <img src={HeroImg} alt="Hero" id="HeroImg" />
      </div>
    </div>
  );
};
