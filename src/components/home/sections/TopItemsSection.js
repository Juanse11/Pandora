import React from "react";
import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import CardDisplayBox from "../CardDisplayBox";

const TopItemsSection = props => (
  <Segment
    style={{ padding: "4em 0em", "background-color": "#f3f3f5" }}
    vertical
  >
    <Grid container doubling verticalAlign="middle" textAlign="left">
      <Grid.Row textAlign="left">
        <Grid.Column width={16}>
          <Header as="h3" style={{ fontSize: "2em", color: '#008eb3' }}>
            Canchas con mayor valoracion
          </Header>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row textAlign="center">
        <Grid.Column textAlign="left">
          <CardDisplayBox />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <h3>Mostrar todo</h3>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default TopItemsSection;
