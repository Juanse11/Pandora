import React from "react";
import {
  Button,
  Grid,
  Header,
  Image,
  Segment
} from "semantic-ui-react";
import sports from "../../../assets/sports.png";

const DiscoverSection = () => (<Segment style={{
  padding: "4em 0em",
  "background-color": "#f3f3f5",
  border: "none"
}} vertical>
  <Grid container stackable verticalAlign="middle">
    <Grid.Row>
      <Grid.Column width={8}>
        <Header as="h3" style={{ fontSize: "2em", color: "#f4656d" }}>
          Practica tu deporte favorito
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          l l l l l l l l sdf sdflsd folksd l skdf lskdf sldkf sdlf ksdf lksdf
          .
        </p>
        <Header as="h3" style={{ fontSize: "2em" }}>
          l l l l l l l l sdf sdflsd folksd l skdf lskdf sldkf sdlf ksdf lksdf
          .
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          l l l l l l l l sdf sdflsd folksd l skdf lskdf sldkf sdlf ksdf lksdf
          .
        </p>
      </Grid.Column>
      <Grid.Column floated="right" width={6}>
        <Image wrapped rounded size="large" src={sports} />
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column textAlign="center">
        <Button style={{
          "background-color": "#f4656d",
          color: "#ffffff"
        }} size='huge'>
          Descubre
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
</Segment>);

export default DiscoverSection;
