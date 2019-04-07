import React from "react";
import { Card, Icon, Rating, Segment } from "semantic-ui-react";

const CardItem = () => (
  <Card
    href="#card-example-link-card"
    style={{ margin: "0 auto", background: "none", boxShadow: "none" }}
  >
    <Segment
      fluid
      style={{
        padding: "0em",
        margin: "0",
        minHeight: 150,
        maxWidth: "100%",
        backgroundImage: `url("https://images.performgroup.com/di/library/omnisport/38/c/spurs-new-stadium-cropped_gat96a7nwka71n72329gu8dvy.jpg?t=-744573367&quality=100")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "transparent",
        boxShadow: "none",
        textAlign: "center"
      }}
    />
    <Card.Content style={{ padding: "1em 0em" }}>
      <Card.Header>Spurs New Stadium - Soledad </Card.Header>
      <Card.Meta style={{ paddingTop: "0.5em" }}>
        <Icon name="soccer" />
        <span>Futbol</span>
      </Card.Meta>
      <Card.Description>$300,200 COP por hora</Card.Description>
      <Rating
        icon="star"
        disabled
        defaultRating={4}
        maxRating={5}
        size="mini"
        style={{ marginTop: "0.5em" }}
      />
      <span style={{ "padding-left": "5px" }}>25</span>
    </Card.Content>
  </Card>
);

export default CardItem;
