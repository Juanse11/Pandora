import React from "react";
import { Card, Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledCard = styled(Card)`
  &&& {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
    width: 100%;
    min-height: 455px;
    height: 100%;
    @media only screen and (min-width: 768px) {
      width: 325px;
      min-height: 455px;
      height: 100%;
    }
  }
`;

const CardButton = styled(Button)`
  &&& {
    &:hover {
      color: #483df6;
      background: #483df642;
    }
    background: none;
    color: #483df6;
    font-weight: 600;
    letter-spacing: 1px;
    margin-left: 0.9em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    @media only screen and (min-width: 768px) {
      background: none;
      margin-left: 0.9em;
      padding-left: 0.5em;
      padding-right: 0.5em;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 20em;
`;

const SportCard = ({ image, sport }) => (
  <div style={{ padding: "1.5em" }}>
    <Image src={image} />
  </div>
);

export default SportCard;
