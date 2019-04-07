import React from "react";
import { Grid } from "semantic-ui-react";
import CardItem from "./CardItem";

const CardDisplayBox = () => (
  <Grid doubling>
    <Grid.Row columns={4}>
      <Grid.Column mobile={8} computer={4}>
        <CardItem />
      </Grid.Column>
      <Grid.Column mobile={8} computer={4}>
        <CardItem />
      </Grid.Column>
      <Grid.Column mobile={8} computer={4}>
        <CardItem />
      </Grid.Column>
      <Grid.Column mobile={8} computer={4}>
        <CardItem />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default CardDisplayBox;
