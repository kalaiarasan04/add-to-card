
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss"

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      autoplay:true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let caro=[
        "https://res.cloudinary.com/farmersfreshzone/image/upload/v1699265240/banner/k1drak4vryepb8jc1oby.jpg",
        "https://res.cloudinary.com/farmersfreshzone/image/upload/v1697711207/banner/jrfzvbw3jlstr1x2edwx.jpg",
        "https://res.cloudinary.com/farmersfreshzone/image/upload/v1698560458/banner/madfkn1aixrqcyeispta.jpg",
        "https://res.cloudinary.com/farmersfreshzone/image/upload/v1698757840/banner/efvo4m7lgyqgkeul4t9y.jpg"
    ]
    return (
        <section className="caro-sec">
      <div className="container">
        <Slider {...settings}>
          {
            caro.map((a,i)=>{
                return(
                    <div>
                        <img src={a} alt="" style={{width:"100%",marginBottom:"15px"}}/>
                    </div>
                )
            })
          }
        </Slider>
      </div>
      </section>
    );
  }
}