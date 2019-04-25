import React from "react";
import Header from "../components/Post/SearchHeader";
import Results from "../components/Post/SearchResults";
import Footer from "../components/shared/Footer";

export default class SearchPage extends React.Component {
 
  render() {
    return (
        <div style={{ paddingBottom: "10em", background: "#fafafe" }}>
          <Header>
            <Results />
          </Header>
        </div>
    );
  }
}
