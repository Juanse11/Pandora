import React from "react";
import Header from "../components/Post/SearchHeader";
import Results from "../components/Post/SearchResults";
import Footer from "../components/shared/Footer";
import { DimmerProvider } from "../components/contexts/DimmerContext";

export default class SearchPage extends React.Component {
  state = {
    dimmer: false
  };

  onDimmerChange = e => {
    this.setState(prevState => {
      return {
        dimmer: !prevState.dimmer
      };
    });
  };

  render() {
    return (
      <DimmerProvider
        value={{
          dimmer: this.state.dimmer,
          onDimmerChange: this.onDimmerChange
        }}
      >
        <div style={{ paddingBottom: "10em", background: '#fafafe' }}>
          <Header />
          <Results />
        </div>
      </DimmerProvider>
    );
  }
}
