import React from "react";
import styled from "styled-components";
import Dropdown from "@trendmicro/react-dropdown";
import { DimmerConsumer } from "../../contexts/DimmerContext";

const StyledDropdownMenu = styled(Dropdown.Menu)`
  &&& {
    max-width: 400px;
    min-width: 300px;
    min-height: 100%;
    border-width: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background-clip: initial;
    top: 125%;
    z-index: 1001;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 36px 2px;
    white-space: normal !important;
  }
`;

StyledDropdownMenu.propTypes = Dropdown.Menu.propTypes;
StyledDropdownMenu.defaultProps = Dropdown.Menu.defaultProps;

const Box = styled.div`
  &&& {
    display: block;
    height: 100%;
    padding: 1em;
  }
`;

const StyledToggle = styled(Dropdown.Toggle)`
  &&& {
    &:hover {
      background: #f2f2f2;
      border: 1px solid #f2f2f2;
    }
    border: 1px solid rgb(228, 228, 228);
    font-weight: 400;
    font-size: 15px;
  }
`;

StyledToggle.propTypes = Dropdown.Toggle.propTypes;
StyledToggle.defaultProps = Dropdown.Toggle.defaultProps;

const FilterWrapper = ({ name, children }) => (
  <DimmerConsumer>
    {context => (
      <Dropdown onToggle={context.onDimmerChange}>
        <StyledToggle title={name} />
        <StyledDropdownMenu>
          {children}
        </StyledDropdownMenu>
      </Dropdown>
      
    )}
  </DimmerConsumer>
);

export default FilterWrapper;
