import React from "react";
import styled from "styled-components";
import { Container, Grid, Divider } from "semantic-ui-react";

import Header from "./Header";
import PictureSlider from "./PictureSlider";
import CardDetails from "./CardDetails";
import Reviews from "./Reviews/Reviews";
import Availability from './Availability/Container'

const StyledContainer = styled(Container)`
  &&&&&&&&&&& {
    max-width: 1080px !important;
    padding: 0 18px;

    margin-top: 32px;
  }
`;

const Content = () => (
  <React.Fragment>
    <PictureSlider />
    <StyledContainer>
      <Header rating={5} />
      <Grid style={{margin: 0, marginTop: '24px'}}>
        <Grid.Column style={{ padding: 0 }} computer={10}>
          <Divider style={{ margin: 0,marginBottom: "24px" }} />
          <Availability />
          <Reviews />
        </Grid.Column>
        <Grid.Column
          computer={6}
          style={{ display: "flex", flexDirection: 'column', alignItems: "flex-end", padding: 0 }}
        >
          <CardDetails />
        </Grid.Column>
      </Grid>
    </StyledContainer>
  </React.Fragment>
);

export default Content;
