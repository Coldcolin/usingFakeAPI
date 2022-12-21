import React, {useEffect, useState} from 'react'
import axios from "axios"
import Cards from "../Cards/Cards"
import Slider from "react-slick";
import "./Body.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clothes from "../../assets/clothes.jpg";
import electronics from "../../assets/monilePhone.jpg";
import jewelry from "../../assets/weddingRing.jpg";



const Body = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  
  return (
    <div className="Body-holder">
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-div">
            <h2>Get Clothes</h2>
            <img src={clothes} alt="clothes" className="slider-image" />
          </div>
          <div className="slider-div">
            <h2>Get Jewelries</h2>
            <img src={jewelry} alt="jewelry" className="slider-image" />
          </div>
          <div className="slider-div">
            <h2>Get Electronics</h2>
            <img src={electronics} alt="electronics" className="slider-image" />
          </div>
        </Slider>
      </div>
      <Cards/>
    </div>
  )
}

export default Body