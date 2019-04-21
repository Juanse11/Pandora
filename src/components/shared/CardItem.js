import React from "react";
import styled from "styled-components";
import { Card, Icon, Rating } from "semantic-ui-react";

const Image = styled.img`
  object-fit: cover;
  padding: 0.8em 0.8em;
  width: 100%;
  min-height: 285px;
  height: 100%;
`;

const StyledCard = styled(Card)`
  &&& {
    box-shadow: none;
    width: 100%;
    min-height: 285.31px;
    height: 100%;
    border: 1px solid rgb(228, 228, 228);

    @media only screen and (min-width: 768px) {
      width: 300px;
      min-height: 285px;
      height: 100%;
    }
  }
`;

const CardItem = ({ title, price, rating, sport, image } = {}) => (
  <StyledCard href="#card-example-link-card">
    <Image src={image} />
    <Card.Content
      style={{
        border: "none"
      }}
    >
      <Card.Header
        style={{ fontWeight: 700, color: "#4f4b65", fontSize: "1.3em" }}
      >
        {title}{" "}
      </Card.Header>
      <Card.Meta
        style={{ paddingTop: "0.2em", marginBottom: "0em", fontSize: "0.9em" }}
      >
        <Icon name="soccer" />
        <span>{sport}</span>
      </Card.Meta>
      <Rating
        icon="star"
        disabled
        defaultRating={rating}
        maxRating={1}
        size="tiny"
        style={{ marginTop: "0.2em", marginBottom: '1em' }}
      />
      <span
        style={{
          "padding-left": "5px",
          color: "#3a91aac9",
          fontWeight: 600,
          fontSize: "1em"
        }}
      >
        {4.95}
      </span>
      <Card.Description
        style={{
          fontWeight: 700,
          color: "#4f4b65",
          fontSize: "1.3em",
          textAlign: "right"
        }}
      >
        ${price} COP
        <span style={{ fontWeight: 400, color: "#4f4b65", fontSize: "1rem" }}>
          /hora
        </span>
      </Card.Description>
    </Card.Content>
  </StyledCard>
);

export default CardItem;
