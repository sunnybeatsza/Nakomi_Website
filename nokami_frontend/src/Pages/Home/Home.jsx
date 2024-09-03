import React from "react";
import "./Home.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Hero } from "../../Components/Hero/Hero";
import { NewProducts } from "../../Components/NewProducts/NewProducts";
import { ProductPreview } from "../../Components/ProductPreview/ProductPreview";

export const Home = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/* Product Preview */}
      <ProductPreview />

      {/*New Products */}
      <NewProducts />
    </div>
  );
};
