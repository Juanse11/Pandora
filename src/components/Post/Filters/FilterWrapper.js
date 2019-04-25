import React from "react";
import styled from "styled-components";
import Dropdown from "@trendmicro/react-dropdown";
import { DimmerConsumer } from "../../contexts/DimmerContext";

const StyledDropdownMenu = styled(Dropdown.Menu)`
  &&& {
    padding: 0;
    max-width: 400px;
    min-width: 300px;
    min-height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    background-clip: initial;
    top: 125%;
    z-index: 1001;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 14px 36px 2px;
    white-space: normal !important;
    transition: none;
    transition-delay: 0;
  }
`;

StyledDropdownMenu.propTypes = Dropdown.Menu.propTypes;
StyledDropdownMenu.defaultProps = Dropdown.Menu.defaultProps;

const StyledToggle = styled(Dropdown.Toggle)`
  &&& {
    &:hover {
      background: #f2f2f2;
      border: 1px solid #f2f2f2;
    }
    color: #4f4b65;
    background: ${props => (props.active ? "#3a91aa" : "none")};
    border: 1px solid rgb(228, 228, 228);
    font-weight: 400;
    font-size: 15px;
  }
`;

StyledToggle.propTypes = Dropdown.Toggle.propTypes;
StyledToggle.defaultProps = Dropdown.Toggle.defaultProps;

const Submit = styled.a`
  &&& {
    color: #3a91aa 
    align-self: flex-end;
    font-size: 14px;
    font-weight: 600;
    margin-right: 38px;
    margin-bottom: 15px;
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
  }
`;

const FilterWrapper = ({
  name,
  children,
  isOpen,
  isActive,
  handleDropdownToggle,
  onClose
}) => (
  <Dropdown
    open={isOpen}
    onToggle={handleDropdownToggle}
    onClose={onClose}
  >
    <StyledToggle active={isActive} title={name} />
    <StyledDropdownMenu>
      <Box>
        {children}
        <Submit onClick={onClose} href="#submit">
          Aplicar
        </Submit>
      </Box>
    </StyledDropdownMenu>
  </Dropdown>
);

export default FilterWrapper;
