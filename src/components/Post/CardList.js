import React from "react";
import { Grid, Pagination, Icon } from "semantic-ui-react";
import CardItem from "./CardItem";
import styled from 'styled-components'

const Column = styled(Grid.Column)`
  &&&&&&& {
  }
`

const CardItemList = ({ items, isLoading }) => (
  <Grid style={{marginTop: '3em'}} doubling centered relaxed>
    <Grid.Row columns={4} style={{ justifyContent: 'center'}}>
      {items.map((item,index) => (
        <Column style={{padding: '8px 8px 12px'}} mobile={15} tablet={8} computer={4}>
          <CardItem key={index} {...item} isLoading={isLoading} />
        </Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default CardItemList;
