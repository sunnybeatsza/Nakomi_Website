import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Products.css";

export const Products = () => {
  return (
    <div>
      <Navbar />

      <div className="Products-Heading">Products</div>

      <div className="action-bar">
        <div className="collection-nav-buttons">
          <div className="action-buttons">FILTER</div>
          <div className="action-buttons">BEST SELLING</div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
};
