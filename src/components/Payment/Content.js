import React from "react";
import styled from "styled-components";
import { Container, Grid, Divider, Dropdown, Button } from "semantic-ui-react";

import CardSummary from "./CardSummary";
import PaymentMethod from "./PaymentMethod";

const StyledContainer = styled(Container)`
  &&&&&&&&&&& {
    max-width: 1080px !important;
    padding: 0 18px;
    padding-bottom: 96px;
    margin-top: 32px;
  }
`;

const Title = styled.p`
  &&& {
    font-size: 32px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const StyledDropdown = styled(Dropdown)`
  max-width: 200px;
`;

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  }
];

const Pay = styled(Button)`
  &&& {
    align-self: center;
    border: 2px solid #483df6;
    background: #483df6;
    padding: 10px 22px;
    display: inline-block;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
    &:hover {
      background: #483df6;
      color: #fff;
    }
  }
`;

const Content = () => (
  <React.Fragment>
    <StyledContainer>
      <Grid
        style={{
          margin: 0,
          marginTop: "24px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Grid.Column mobile={16} computer={8}>
          <Title>Revisar y pagar</Title>
          <StyledDropdown
            placeholder="Select Friend"
            fluid
            selection
            options={friendOptions}
          />
          <PaymentMethod />
          <Pay>Pagar</Pay>
        </Grid.Column>
        <Grid.Column
          computer={6}
          mobile={16}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            padding: 0
          }}
        >
          <CardSummary />
        </Grid.Column>
      </Grid>
      <Divider style={{ margin: "24px 0" }} />
    </StyledContainer>
  </React.Fragment>
);

export default Content;
