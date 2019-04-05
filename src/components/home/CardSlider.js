import React, { Component } from "react";
import Slider from "react-slick";

import CardSliderItem from './CardSliderItem'

export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
          <CardSliderItem/>
        </Slider>
      </div>
    );
  }
}