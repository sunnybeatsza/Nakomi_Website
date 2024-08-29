import React from "react";
import "./Navbar.css";
import LogoImg from "../../Assets/Logo1_Copy.jpg";

export const Navbar = () => {
  return (
    <div className="navbar-items">
      <a href="/">
        <img src={LogoImg} alt="Logo-Img" id="Logo-Img" />
      </a>
      <ul>
        <li>HOME</li>
        <li>PRODUCTS</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="nav-icons">
        <i class="bi bi-search"></i>
        <i class="bi bi-person"></i>
        <i class="bi bi-bag"></i>
      </div>
    </div>
  );
};
