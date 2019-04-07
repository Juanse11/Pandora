import React, { Component } from "react";
import Slider from "react-slick";

import CardSliderItem from "./CardSliderItem";

export default class CardSlider extends Component {
  
    
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,

            centerMode: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            variableWidth: true,

            centerMode: true
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.items.map((item, index) => (
            <CardSliderItem picture={item} key={index} />
          ))}
        </Slider>
      </div>
    );
  }
}
