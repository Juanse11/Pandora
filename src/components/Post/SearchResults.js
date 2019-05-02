import React from "react";
import styled from "styled-components";
import PostList from "../Post/PostListContainer";
import {
  Container,
  Dimmer,
  Segment,
  Header,
  Icon,
  Dropdown
} from "semantic-ui-react";
import { connect } from "react-redux";

import Sidebar from "./Sidebar";

const StyledSegment = styled(Segment)`
  &&&& {
    background: #fff;
    padding: 0;
    padding-top: 4em;
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
`;

const Paragraph = styled(Header)`
  &&& {
    font-size: 15px;
    color: #4f4b65;
    font-weight: 800;
    margin: 0;
    align-self: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const Title = styled(Header)`
  &&& {
    font-size: 25px;
    color: #4f4b65;
    font-weight: 800;
    margin: 0;
    align-self: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const SearchResultsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SearchBox = styled(Container)`
  &&&&& {
    width: 80%;
  }
`;
const ViewOption = styled(Icon)`
  &&&&&&&& {
    color: #4f4b65;
    cursor: pointer;
    font-size: 15px;
    margin-right: 0.5em;
    transition: color 0.2s, padding-bottom 0.2s;
    &:hover {
      color: #3a91aa;
    }
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;
const friendOptions = [
  {
    key: "Precio (Asc)",
    text: "Precio (Asc)",
    value: "Precio (Asc)",
    icon: {
      name: 'money bill alternate outline'
    }
  },
  {
    key: "Precio (Desc)",
    text: "Precio (Desc)",
    value: "Precio (Desc)",
    icon: {
      name: 'money bill alternate outline'
    }
  },
  {
    key: "Calificacion (Asc)",
    text: "Calificacion (Asc)",
    value: "Calificacion (Asc)",
    icon: {
      name: 'star outline'
    }
  },{
    key: "Calificacion (Desc)",
    text: "Calificacion (Desc)",
    value: "Calificacion (Desc)",
    icon: {
      name: 'star outline'
    }
  },
];

const StyledDropdown = styled(Dropdown)`
  &&&&&&& {
    min-width: 150px;
    min-height: 0px;
    max-width: 150px;
    max-height: 40px;
    margin: 0 0.2em;
    margin-right: 0;
    padding: 0;
    padding: 10px 15px;
    padding-right: 40px;
    
  }
`;

// «Barranquilla»
const SearchResults = ({ isDimmed }) => (
  <StyledSegment>
    <SearchBox fluid>
      <Title>Resultados en «Barranquilla»</Title>
      <SearchResultsHeader>
        <Paragraph>300 establecimientos</Paragraph>

        <Paragraph
          style={{ display: "flex", maxWidth: "100%" }}
        >
          <Paragraph style={{ display: "flex"}}>
            <ViewOption name="block layout" />
            <ViewOption name="list layout" />
          </Paragraph>

          <StyledDropdown
            fluid
            placeholder="Ordenar por"
            selection
            options={friendOptions}
          />
        </Paragraph>
      </SearchResultsHeader>

      <StyledDimmer active={isDimmed} />
      <PostList />
    </SearchBox>
  </StyledSegment>
);

const mapStateToProps = ({ filters: { isDimmed } }) => {
  return {
    isDimmed
  };
};

export default connect(mapStateToProps)(SearchResults);
