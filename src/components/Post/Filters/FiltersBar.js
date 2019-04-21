import React from "react";
import { Segment } from "semantic-ui-react";
import styled from "styled-components";
import FiltersList from './FiltersList/FiltersListContainer'

const StyledSegment = styled(Segment)`
  &&& {
    background: #fff;
    margin: 0;
    border-radius: 0;
    border-right: 0;
    border: none;
    border-bottom: 1px solid rgb(228, 228, 228);
    box-shadow: none;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
  }
`;

const FiltersBar = props => (
  <StyledSegment>
    <FiltersList />
  </StyledSegment>
)



export default FiltersBar;
