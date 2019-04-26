import React from "react";
import { Checkbox } from "semantic-ui-react";
import styled from "styled-components";
import FilterWrapper from "../FilterWrapperContainer";

const StyledCheckbox = styled(Checkbox)`
  &&& {
    display: block;
    margin: 1em 0;
    margin-top: 0;
    font-size: 16px;
  }
`;

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    height: 100%;
    width: 100%;
  }
`;

const SportFilter = ({
  onChange,
  name,
  isActive,
  handleApplyChanges
}) => (
  <FilterWrapper
    name={name}
    isActive={isActive}
    handleApplyChanges={handleApplyChanges}
  >
    <Box>
      <StyledCheckbox label="Futbol" name="futbol" onChange={onChange} />
      <StyledCheckbox
        label="Basquetbol"
        name="basquetbol"
        onChange={onChange}
      />
      <StyledCheckbox label="Tenis" name="tenis" onChange={onChange} />
      <StyledCheckbox label="Beisbol" name="beisbol" onChange={onChange} />
      <StyledCheckbox label="Boxeo" name="boxeo" onChange={onChange} />
    </Box>
  </FilterWrapper>
);

export default SportFilter;
