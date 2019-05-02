import React from "react";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import Post from "./PostItem";
import Sidebar from "./Sidebar";

const Column = styled(Grid.Column)`
  &&&&&&& {
    @media only screen and (min-width: 768px) {
      width: 28% !important;
    }
  }
`;

// <Grid.Column computer={4}>
// <Sidebar />
// </Grid.Column>
// <Header style={{ fontSize: "2em", fontWeight: 700, alignSelf:'flex-start' }}>
//         132 Establecimientos{" "}
//       </Header>
const PostList = ({ items, isLoading }) => (
  <Grid doubling padded="vertically" style={{padding: '20px 0'}}>
    <Grid.Row
      columns={4}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 0,
        alignItems: "center"
      }}
    >
      {items.map((item, index) => (
        <Grid.Column
          key={index}
          mobile={16}
          tablet={16}
          computer={16}
          style={{ marginBottom: "20px" }}
        >
          <Post isLoading={isLoading} {...item} />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default PostList;
