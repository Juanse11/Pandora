import React from "react";
import { Container, Header, Segment, Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledSegment = styled(Segment)`
  &&& {
    padding: 8em 0;
    padding-bottom: 4em;
    min-height: 100px;
    background-color: #483df6;
    margin: 0;
    border: none;
    border-radius: 0;
  }
`;
const Footer = () => (
  <StyledSegment>
    <Container
      style={{
        display: "flex",
        height: "100px",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <p
        style={{
          color: "#ffffff66",
          alignSelf: "center",
          margin: "auto",
          marginBottom: 0
        }}
      >
        © 2019 Team Pandora{" "}
      </p>
    </Container>
  </StyledSegment>
);

export default Footer;
