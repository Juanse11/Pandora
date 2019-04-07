import React from "react";
import { Button, Grid, Header, Segment, Container } from "semantic-ui-react";
import cancha from "../../assets/icons/svg/110-soccer-field-2.svg";

const AboutSection = () => (
  <Segment
    style={{
      padding: "4em 0em",
      backgroundColor: "#fff",
      border: "none"
    }}
    vertical
  >
    <Container>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row centered textAlign="center" stretched>
          <Grid.Column textAlign="center" width={8}>
            <Header as="h3" style={{ fontSize: "2em", color: "#484848" }}>
              Practica tu deporte favorito
            </Header>
            <p style={{ fontSize: "1.33em", color: "#484848", margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
              elit leo. Pellentesque ac orci id est luctus dictum.
            </p>
            <Segment
              style={{
                padding: "0em",
                marginLeft: "13em",
                minHeight: 140,
                maxWidth: "30%",
                backgroundImage: `url(${cancha})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "90% 90%",
                backgroundColor: "transparent",
                boxShadow: "none",
                textAlign: "center",
                border: "none"
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default AboutSection;
