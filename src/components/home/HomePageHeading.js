import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import SearchForm from "./SearchForm/SearchFormContainer";

const HomePageHeading = () => (
  <Container style={{ paddingTop: "14em" }}>
    <Grid columns={3}>
      <Grid.Column
        computer={8}
        mobile={16}
        textAlign="center"
        verticalAlign="top"
      >
        <Header
          as="h1"
          style={{ color: "#fff", fontSize: "5em", fontWeight: 700, paddingTop: '1em' }}
        >
          ¿Quiéres practicar un deporte?
        </Header>
      </Grid.Column>
      <Grid.Column
        floated="right"
        style={{
          "-webkit-box-shadow": "0px 4px 5px 0px rgba(0,0,0,0.47)",
          "-moz-box-shadow": "0px 4px 5px 0px rgba(0,0,0,0.47)",
          "box-shadow": "0px 4px 5px 0px rgba(0,0,0,0.47)",
          "background-color": "#ffffff",
          padding: "2em"
        }}
        mobile={16}
        computer={6}
      >
        <Header
          style={{ color: "#484848" }}
          className="searchForm__header"
          as="h1"
          content="Encuentra lugares para entrenar cerca de ti."
          textAlign="left"
        />
        <SearchForm />
      </Grid.Column>
    </Grid>
  </Container>
);

export default HomePageHeading;
