import React from "react";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import Post from "./PostItem";

const Column = styled(Grid.Column)`
  &&&&&&& {
  }
`;

// <Grid.Column computer={4}>
// <Sidebar />
// </Grid.Column>
// <Header style={{ fontSize: "2em", fontWeight: 700, alignSelf:'flex-start' }}>
//         132 Establecimientos{" "}
//       </Header>
const PostList = ({ items, isLoading }) => (
  <Grid doubling padded="vertically">
    <Grid.Row
      columns={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "32px"
      }}
    >
      {items.map((item, index) => (
        <Grid.Column
          key={index}
          mobile={15}
          tablet={15}
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