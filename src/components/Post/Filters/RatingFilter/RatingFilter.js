import React from "react";
import { Checkbox, Rating } from "semantic-ui-react";
import styled from "styled-components";
import FilterWrapper from "../FilterWrapper";

const Selection = styled.div`
  &&& {
    display: flex;
    min-height: 100%;
    margin: 0.5em 0;
  }
`;

const StyledCheckbox = styled(Checkbox)`
  &&& {
    display: inline-block;
    margin-top: 0;
    font-size: 16px;
    align-self: center;
    &:checked {
      background: black;
    }
  }
`;
const Submit = styled.a`
  &&& {
    color: #3a91aa 
    align-self: flex-end;
    font-size: 14px;
    font-weight: 600;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #3a91aa;
    }
  }
`;
const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    min-width: 375px;
    padding: 20px;
  }
`;

const StyledRating = styled(Rating)`
  &&&&&&& {
    margin: 0 0.5em;
    align-self: center;
    font-size: 15px;
  }
`;
const RatingDescription = styled.p`
  &&& {
    font-weight: 400;
    display: inline-block;
    font-size: 16px;
    color: #4f4b65;
  }
`;

const RatingFilter = ({ onChange }) => (
  <FilterWrapper name="Calificacion">
    <Box>
      <Selection>
        <StyledCheckbox name="4" onChange={onChange} />
        <StyledRating icon="star" disabled rating={4} maxRating={5} />
        <RatingDescription>
          4 estrellas y más
          <span style={{ fontSize: "16px", margin: "0 0.5em" }} />
        </RatingDescription>
      </Selection>
      <Selection>
        <StyledCheckbox name="3" onChange={onChange} />
        <StyledRating icon="star" disabled rating={3} maxRating={5} />
        <RatingDescription>
          3 estrellas y más
          <span style={{ fontSize: "16px", margin: "0 0.5em" }} />
        </RatingDescription>
      </Selection>
      <Selection>
        <StyledCheckbox name="2" onChange={onChange} />
        <StyledRating icon="star" disabled rating={2} maxRating={5} />
        <RatingDescription>
          2 estrellas y más<span style={{ fontSize: "16px" }} />
        </RatingDescription>
      </Selection>
      <Selection>
        <StyledCheckbox name="1" onChange={onChange} />
        <StyledRating icon="star" disabled rating={1} maxRating={5} />
        <RatingDescription>
          1 estrella y más<span style={{ fontSize: "16px" }} />
        </RatingDescription>
      </Selection>
    </Box>
  </FilterWrapper>
);

export default RatingFilter;
