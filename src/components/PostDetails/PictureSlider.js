import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledIcon = styled(Icon)`
  &&&&&&&& {
    color: #4f4b65;
    cursor: pointer;
    font-size: 15px;
    margin-right: 0.5em;
    &:hover {
      color: #4f4b65;
    }
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;

const ImageBox = styled.div`
  &&& {
    height: auto;
    display: flex;
    align-items: stretch;
    align-content: stretch;
    flex-grow: 1;
    max-width: 100%;
    width: 350px;
    max-height: 100%;
    margin-right: 2px;
  }
`;

const StyledButton = styled(Button)`
  &&& {
    position: absolute;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.083em;
    bottom: 24px;
    right: 24px;
    background: #fff;
    color: #4f4b65;
    &:hover {
      background: #fff;
    }
    display: flex;
    padding: 12px 22px;
  }
`;

export default class PictureSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 8000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 8000,
      initialSlide: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
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
    return (
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
          <ImageBox>
            <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
          </ImageBox>
        </Slider>
        <StyledButton>
          <StyledIcon name="grid layout" /> MOSTRAR FOTOS
        </StyledButton>
      </div>
    );
  }
}
