import React from "react";
import { Checkbox } from "semantic-ui-react";
import styled from "styled-components";

const StyledCheckbox = styled(Checkbox)`
  &&& {
    display: block;
    margin: 1em 0;
    margin-top: 0;
    font-size: 16px;
  }
`
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
`
const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 16px;
  }
`

const SportFilter = ({ onChange }) => (
 <Box>
    <StyledCheckbox label='Futbol' name='futbol' onChange={onChange} />
    <StyledCheckbox label='Basquetbol' valu name='basquetbol' onChange={onChange} />
    <StyledCheckbox label='Tenis' name='tenis' onChange={onChange} />
    <StyledCheckbox label='Beisbol' v name='beisbol' onChange={onChange} />
    <StyledCheckbox label='Boxeo' name='boxeo' onChange={onChange} />
    <Submit href='#submit'>Aplicar</Submit>
 </Box>
);

export default SportFilter;
