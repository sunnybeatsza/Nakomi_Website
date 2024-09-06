import React from "react";
import Logo from "../../Assets/Logo1.jpg";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <div>
      <div
        className="px-4 py-5 my-5 text-center moreMargin text-dark"
        id="About-us"
      >
        <img src={Logo} alt="" className="profile-photo" id="Logo" />
        <h1 className="display-5 fw-bold text-dark">About Us</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-3">Nokami Naturals</p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            illo dicta iusto unde voluptatibus? Necessitatibus est officiis, sit
            incidunt magni dicta voluptates. Mollitia nemo blanditiis delectus?
            Culpa porro pariatur corporis.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
        </div>
      </div>
    </div>
  );
};
