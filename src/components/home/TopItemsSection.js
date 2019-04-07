import React from "react";
import { Grid, Header, Segment, Container, Button } from "semantic-ui-react";
import CardDisplayBox from "../shared/CardDisplayBox";

const TopItemsSection = props => (
  <Segment
    style={{ padding: "4em 0em", "background-color": "#f3f3f5" }}
    vertical
  >
    <Container >
      <Grid container stackable doubling verticalAlign="middle">
        <Grid.Row textAlign="left">
          <Grid.Column width={16}>
            <Header as="h3" style={{ fontSize: "2em", color: "#f4656d " }}>
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
          <Grid.Column width={16} style={{paddingTop: 0}}>
            <Button
              type="submit"
              style={{
                "background-color": "#006beb",
                color: "#ffffff"
              }}
              size="large"
            >
              Mostrar Todo
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default TopItemsSection;
