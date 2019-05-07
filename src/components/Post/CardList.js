import React from "react";
import { Grid, Pagination, Icon } from "semantic-ui-react";
import CardItem from "./CardItem";
import styled from "styled-components";

const Column = styled(Grid.Column)`
  &&&&&&& {
    padding: 10px;
  }
`;

const CardItemList = ({ items, isLoading, handleSelectedPark }) => (
  <Grid style={{ margin: 0, paddingTop: "10px" }} doubling centered relaxed>
    <Grid.Row
      columns={4}
      style={{ justifyContent: "space-between", padding: "10px 0" }}
    >
      {items.map((item, index) => (
        <Column key={index} mobile={15} tablet={8} computer={5}>
          <CardItem {...item} handleSelectedPark={handleSelectedPark} isLoading={isLoading} />
        </Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default CardItemList;
