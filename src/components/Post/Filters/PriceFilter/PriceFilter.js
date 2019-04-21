import React from "react";
import { Checkbox } from "semantic-ui-react";
import styled from "styled-components";

const Submit = styled.a`
  &&& {PriceFilter
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

const PriceFilter = ({ onChange }) => (
 <Box>
    
    <Submit href='#submit'>Aplicar filtros</Submit>
 </Box>
);

export default PriceFilter;
