import React from "react";
import styled from "styled-components";
import { Divider } from "semantic-ui-react";
const HeaderBox = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Box = styled.div`
  &&& {
      display: flex;
      flex-direction: column;
  }
`

const Subtitle = ({ children }) => (
  <Box>
    <HeaderBox>
      {children}
    </HeaderBox>
    <Divider style={{ margin: "24px 0" }} />
  </Box>
);

export default Subtitle;
