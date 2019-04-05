import React from "react";
import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react"
import CardSlider from "../CardSlider";

const DiscoverSection = () => (<Segment style={{ padding: "4em 0em", "background-color": "#f3f3f5", border: 'none' }} vertical>
  <Grid container stackable verticalAlign="middle">
    <Grid.Row>
      <Grid.Column width={16}>
        <Header as="h3" style={{ fontSize: "2em", color: '#008eb3' }}>
          Descubre un nuevo deporte
        </Header>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="left">
        <CardSlider />
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>)

export default DiscoverSection