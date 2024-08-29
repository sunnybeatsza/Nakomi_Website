import React from "react";
import "./Home.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Hero } from "../../Components/Hero/Hero";

export const Home = () => {
  return (
    <div>
      {/* Navbar section */}
      <Navbar />

      {/* Hero section */}
      <Hero />
    </div>
  );
};
