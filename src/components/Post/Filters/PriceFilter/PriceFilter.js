import React from "react";
import { Input, Label } from "semantic-ui-react";
import styled from "styled-components";
import FilterWrapper from "../FilterWrapper";

const Submit = styled.a`
  &&& {
    margin-top: 1.5em;
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
    padding: 20px 20px;
  }
`;

const MiddleLabel = styled.p`
  &&& {
    align-self: center;
    font-size: 15px;
    color: #4f4b65;
    margin: 0;
  }
`;

const StyledInput = styled(Input)`
  &&& {
    display: inline-block;
    margin: 1em 0;
    width: 100%;
  }
`;

const PriceFilter = ({
  onChange,
  isOpen,
  handleApplyChanges,
  name,
  isActive,
  handleDropdownToggle
}) => (
  <FilterWrapper
    isOpen={isOpen}
    name={name}
    handleApplyChanges={handleApplyChanges}
    handleDropdownToggle={handleDropdownToggle}
    isActive={isActive}
  >
    <Box>
      <StyledInput
        onChange={onChange}
        fluid
        labelPosition="right"
        type="text"
        placeholder="Minimo"
        name="minPrice"
      >
        <Label
          style={{ background: "#3a91aa", color: "#fff", fontSize: "15px" }}
          basic
        >
          $
        </Label>
        <input type="number" style={{ fontSize: "15px" }} />
        <Label style={{ color: "#4f4b65", fontSize: "15px" }} basic>
          COP
        </Label>
      </StyledInput>
      <MiddleLabel>hasta</MiddleLabel>
      <StyledInput
        onChange={onChange}
        fluid
        labelPosition="right"
        type="text"
        placeholder="Maximo"
        name="maxPrice"
      >
        <Label
          style={{ background: "#3a91aa", color: "#fff", fontSize: "15px" }}
          basic
        >
          $
        </Label>
        <input type="number" style={{ fontSize: "15px" }} />
        <Label style={{ color: "#4f4b65", fontSize: "15px" }} basic>
          COP
        </Label>
      </StyledInput>
    </Box>
  </FilterWrapper>
);

export default PriceFilter;
