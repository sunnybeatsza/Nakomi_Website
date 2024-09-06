import React from "react";
import "./Home.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Hero } from "../../Components/Hero/Hero";
import { NewProducts } from "../../Components/NewProducts/NewProducts";
import { ProductPreview } from "../../Components/ProductPreview/ProductPreview";
import { AboutUs } from "../../Components/AboutUs/AboutUs";
import SimpleSlider from "../../Components/Slider/Slider";

export const Home = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar />

      {/* Hero section */}
      <Hero />

      {/*Slider section */}
      <SimpleSlider />

      {/* Product Preview */}
      <ProductPreview />

      {/*About Us*/}
      <AboutUs />

      {/*New Products */}
    </div>
  );
};
