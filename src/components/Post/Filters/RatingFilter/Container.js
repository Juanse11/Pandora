import React from "react";
import RatingFilter from "./RatingFilter";
import { Icon } from "semantic-ui-react";

export default class RatingFilterContainer extends React.Component {
  state = {
    value: undefined,
    name: "Calificacion",
    isActive: false
  };

  onChange = (e, data) => {
    const value = !data.checked ? undefined : data.value;
    this.setState(() => ({ value }));
  };

  handleApplyChanges = () => {
    let name = this.state.value
      ? ` ${this.state.value} ★ en adelante`
      : "Calificacion";
    let isActive = this.state.value ? true : false;
    this.setState({ name, isActive });
  };

  render() {
    return (
      <RatingFilter
        onChange={this.onChange}
        handleApplyChanges={this.handleApplyChanges}
        {...this.state}
      />
    );
  }
}
