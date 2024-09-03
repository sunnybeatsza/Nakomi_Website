import React from "react";
import "./ProductPreview.css";
import Image1 from "../../Assets/Product_lemon.jpg";

export const ProductPreview = () => {
  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={Image1} alt="nike-air-shoe" />
          </div>
          <div className="contentBx">
            <h1>Hair Oil</h1>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};
