import React from "react";
import Slider from "react-slick";
import Image1 from "../../Assets/Product_Leaves.jpg";
import Image2 from "../../Assets/Product_lemon.jpg";

import "./Slider.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <>
      <div id="Events">
        <div className="px-4 py-5 my-5 text-center" id="events-background">
          <h1 className="display-5 fw-bold text-dark">Natural Ingriedients</h1>
          <div className="col-lg-6 mx-auto">
            <p className="text-dark mb-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda veritatis, blanditiis officiis, illo minima aliquam
              eligendi corrupti atque, voluptatem excepturi reprehenderit.
              Recusandae, id. Id excepturi quis facilis recusandae modi
              quisquam.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center"></div>
          </div>
        </div>
      </div>
      <Slider {...settings} className="custom-slider">
        <div>
          <img src={Image1} alt="Image 1" />
          <p className="text-light">Serving smiles</p>
        </div>
        <div>
          <img src={Image2} alt="Image 2" />
          <p className="text-light">Amazing service</p>
        </div>
        <div>
          <img src={Image1} alt="Image 3" />
          <p className="text-light">Premium Drinks</p>
        </div>
        <div>
          <img src={Image2} alt="Image 4" />
          <p className="text-light">Lovely cocktails</p>
        </div>
        <div>
          <img src={Image1} alt="Image 5" />
          <p className="text-light">Happy clients</p>
        </div>
        <div>
          <img src={Image2} alt="Image 6" />
          <p className="text-light">Serving flavour</p>
        </div>
      </Slider>
    </>
  );
}
