import React from "react";
import "./NewProducts.css";

export const NewProducts = () => {
  return (
    <div className="NewProducts">
      <div className="NewProducts-Heading">
        <p className="nested_heading">New Products</p>
        <p className="nested_paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          maiores doloremque iure deleniti!
        </p>
      </div>

      <div className="NewProducts-Grid">
        {/* From Uiverse.io by alexruix */}
        <div class="card">
          <div class="card-details">
            <p class="text-title">Card title</p>
          </div>
          <button class="card-button">More info</button>
        </div>

        <div class="card">
          <div class="card-details">
            <p class="text-title">Card title</p>
          </div>
          <button class="card-button">More info</button>
        </div>
        <div class="card">
          <div class="card-details">
            <p class="text-title">Card title</p>
          </div>
          <button class="card-button">More info</button>
        </div>
      </div>
    </div>
  );
};
