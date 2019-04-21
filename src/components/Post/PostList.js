import React from "react";
import { Grid, Pagination, Dimmer } from "semantic-ui-react";
import Post from "../shared/CardItem";

const PostList = ({ items }) => (
  <Grid doubling padded="vertically">
  
    <Grid.Row columns={4} style={{ justifyContent: 'center', display: 'flex'}}>
      {items.map(item => (
        <Grid.Column mobile={8} computer={5} style={{ marginTop: "1em" }}>
          <Post {...item} />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default PostList;
