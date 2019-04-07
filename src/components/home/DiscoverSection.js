import React from "react";
import { Grid, Header, Segment, Container, Card } from "semantic-ui-react";
import styled from "styled-components";
import sport1 from "../../assets/icons/svg/110-soccer-field-2.svg";
import sport2 from "../../assets/icons/svg/114-stopwatch.svg";

const sports = [sport1, sport2];
const StyledSegment = styled(Segment)`
  &&& {
    padding: 4em 0em;
    background-color: #f3f3f5;
    border: none;
    margin: 0;
  }
`;

const DiscoverSection = () => (
  <StyledSegment>
    <Container>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3" style={{ fontSize: "2em", color: "#f4656d" }}>
              Conoce Pandora
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row
          columns={2}
          textAlign="center"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Grid.Column style={{ maxWidth: 200 }} mobile={8}>
          <Card
          href="#card-example-link-card"
          style={{ margin: "0 auto", background: "none", boxShadow: "none" }}
        >
          <Segment
            style={{
              padding: "0em",
              margin: "0",
              minHeight: 180,
              maxWidth: "100%",
              backgroundImage: `url(${sport1})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundColor: "transparent",
              boxShadow: "none",
              border: 'none',
              textAlign: "center"
            }}
          />{" "}
          <Card.Content style={{ padding: "1em 0em" }}>
            <Card.Header>Cursos</Card.Header>
          </Card.Content>
        </Card>
          </Grid.Column>
          <Grid.Column style={{ maxWidth: 220 }} mobile={8}>
            <Card
              style={{
                padding: "0em",
                height: 200,
                width: 210,
                backgroundImage: `url(${sport2})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundColor: "transparent",
                boxShadow: "none",
                textAlign: "center"
              }}
              href="#card-example-link-card"
            >
              <Card.Content>
                <Card.Header>Cursos</Card.Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </StyledSegment>
);

export default DiscoverSection;
