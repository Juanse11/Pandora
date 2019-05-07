import React from "react";
import { Grid, Pagination, Icon } from "semantic-ui-react";
import CardItem from "../CardItem";
import styled from 'styled-components'

const Column = styled(Grid.Column)`

`

const CardItemList = ({ items }) => (
  <Grid style={{marginTop: '3em'}} doubling centered relaxed>
    <Grid.Row columns={4} style={{ justifyContent: 'center'}}>
      {items.map(item => (
        <Column mobile={14} computer={4}>
          <CardItem {...item} />
        </Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default CardItemList;
