import React from "react";
import RatingFilter from "./RatingFilter";

export default class RatingFilterContainer extends React.Component {
  state = {
    ratingFilter: {
      5: undefined,
      4.5: undefined,
      4: undefined,
      3.5: undefined,
      3: undefined
    }
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = data.checked;
    this.setState(() => ({ [field]: value }));
  }

  render() {
    return <RatingFilter onChange={this.onChange} />;
  }
}
