import React from "react";
import { Grid, Header, Segment, Container } from "semantic-ui-react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
import sport1 from "../../assets/icons/svg/140-volleyball.svg";
import sport2 from "../../assets/icons/svg/057-golf.svg";
import sport3 from "../../assets/icons/svg/023-bowling.svg";
import sport4 from "../../assets/icons/svg/007-baseball.svg";
import sport5 from "../../assets/icons/svg/010-basketball.svg";

const sports = [sport1, sport2, sport3, sport4, sport5];
const StyledSegment = styled(Segment)`
  &&& {
    padding: 4em 0em;
    background-color: #fff;
    border: none;
    margin: 0;
  }
`;

const SportsSection = () => (
  <StyledSegment>
    <Container >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h3" style={{ fontSize: "2em", color: "#484848" }}>
              Prueba otros deportes
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="left">
            <Container>
              <CardSlider items={sports} />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </StyledSegment>
);

export default SportsSection;
