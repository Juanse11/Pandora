import React from "react";
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
  Container
} from "semantic-ui-react";
import cursos from "../../assets/icons/svg/114-stopwatch.svg";

const MeetSection = () => (
  <Segment
    style={{
      padding: "4em 0em",
      "background-color": "#f3f3f5",
      border: "none"
    }}
    vertical
  >
    <Container>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row centered textAlign="center" stretched>
          <Grid.Column textAlign="center" width={8}>
            <Segment
              style={{
                padding: "0em",
                margin: "0",
                minHeight: 300,
                maxWidth: "100%",
                backgroundImage: `url(${cursos})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "80% 80%",
                backgroundColor: "transparent",
                boxShadow: "none",
                textAlign: "center",
                border: "none"
              }}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em", color: "#f4656d" }}>
              Practica tu deporte favorito
            </Header>
            <p style={{ fontSize: "1.33em", color: "#484848" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
              elit leo. Pellentesque ac orci id est luctus dictum.
            </p>
            <Header as="h3" style={{ fontSize: "2em", color: "#484848" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Header>
            <p style={{ fontSize: "1.33em", color: "#484848" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
              elit leo. Praesent posuere
            </p>
            <Button
              style={{
                "background-color": "#006beb",
                color: "#ffffff",
                marginTop: '1em',
                marginLeft: '25%',
                maxWidth: '50%'
              }}
              size="huge"
            >
              Descubre
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default MeetSection;
