import React from "react";
import styled from "styled-components";
import { Rating, Divider, Grid } from "semantic-ui-react";

const HeaderBox = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Sport = styled.span`
  &&& {
    font-size: 12px;
    font-weight: 800;
    color: #4f4b65;
    margin: 0;
  }
`;
const Title = styled.h1`
  &&& {
    font-size: 46px;
    font-weight: 800;
    color: #4f4b65;
    margin: 0;
    padding: 8px 0;
    line-height: 1.1em;
  }
`;

const TitleBox = styled.div`
  &&& {
    max-width: 100%;
  }
`;

const Header = ({ rating }) => (
  <Grid>
    <Grid.Column computer={10} style={{padding: 0}}>
      <HeaderBox>
        <Sport>FUTBOL SALA</Sport>
        <TitleBox>
          <Title>Spurs New Stadium - Soledad</Title>
        </TitleBox>
        
      </HeaderBox>
    </Grid.Column>
  </Grid>
);

export default Header;
