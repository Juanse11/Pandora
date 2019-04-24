import React from "react";
import styled from "styled-components";
import PostList from "../Post/PostListContainer";
import { Container, Dimmer, Segment } from "semantic-ui-react";
import { DimmerConsumer } from "../contexts/DimmerContext";
import Sidebar from './Sidebar'


const StyledSegment = styled(Segment)`
  &&&& {
    background: #fff;
    padding: 0;
    padding-top: 2em;
    margin: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    width: 100% @media only screen and (min-width: 768px) {

    }
  }
`;
const StyledDimmer = styled(Dimmer)`
  &&& {
    background-color: #fafafed9;
  }
`


const SearchResults = () => (
  <DimmerConsumer>
    {context => (
      <StyledSegment>
        <Container fluid>
          <StyledDimmer active={context.dimmer} />
          <PostList />
        </Container>
      </StyledSegment>
    )}
  </DimmerConsumer>
);

export default SearchResults;
