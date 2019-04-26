import React from "react";
import SportFilter from "./SportFilter";

export default class SportFilterContainer extends React.Component {
  state = {
    sports: {
      futbol: undefined,
      tenis: undefined,
      beisbol: undefined,
      basquetbol: undefined,
      boxeo: undefined,
      yoga: undefined
    },
    name: "Deporte",
    isActive: false
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = data.checked;
    this.setState(({ sports }) => {
      const newSports = { ...sports };
      newSports[field] = value;
      return {
        sports: newSports
      };
    });
  };

  handleApplyChanges = () => {
    let name = "Deporte";
    let isActive = false;
    const sportsSelected = Object.keys(this.state.sports).filter((sport) => this.state.sports[sport]);
    
    if (sportsSelected.length === 1) {
      name = `${sportsSelected[0][0].toUpperCase()}${sportsSelected[0].slice(1)}`;
      isActive = true;
    } else if (sportsSelected.length > 1) {
      name = `Deportes · ${sportsSelected.length}`;
      isActive = true;
    }

    this.setState({ name, isActive });
  };

  render() {
    return (
      <SportFilter
        onChange={this.onChange}
        handleApplyChanges={this.handleApplyChanges}
        {...this.state}
      />
    );
  }
}
