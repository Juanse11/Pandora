import React from 'react'
import {
    Container,
    Grid,
    Header  } from "semantic-ui-react";
import SearchForm from './SearchForm/SearchFormContainer'

const HomePageHeading = () => (<Container style={{ paddingTop: "8em" }}>
<Grid columns={3}>
  <Grid.Column floated="right" style={{
    "-webkit-box-shadow": "0px 4px 5px 0px rgba(0,0,0,0.47)",
    "-moz-box-shadow": "0px 4px 5px 0px rgba(0,0,0,0.47)",
    "box-shadow": "0px 4px 5px 0px rgba(0,0,0,0.47)",
    "background-color": "#ffffff"
  }} mobile={16} computer={6}>
    <Header style={{ color: "#484848" }} className="searchForm__header" as="h1" content="Encuentra lugares para entrenar cerca de ti." />
    <SearchForm />
  </Grid.Column>
    <Grid.Column computer={8} floated="left" only='computer'>

    </Grid.Column>
  </Grid>
</Container>);

export default HomePageHeading