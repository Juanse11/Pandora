import React from "react";
import PriceFilter from "./PriceFilter";
import { connect } from "react-redux";
import { setMaximumPrice, setMinimumPrice } from "../../../../actions/filters";

class PriceFilterContainer extends React.Component {
  state = {
    minPrice: 0,
    maxPrice: 0,
    name: "Precio",
    isActive: false,
    isOpen: undefined,
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = data.value;
    if (value && (field === "maxPrice")) {
      var name = `Hasta ${value}`;
    }
    console.log(name)

    this.setState(() => ({ [field]: value, name }));
  };

  handleDropdownToggle = () => {
    console.log(11)
    this.setState((prevState) => ({ isOpen: !prevState.isOpen}));
  }

  handleApplyChanges = () => {
    console.log(112)
    this.props.setMaximumPrice(this.state.maxPrice);
    this.props.setMinimumPrice(this.state.minPrice);
    this.handleDropdownToggle()
    
  };

  render() {
    return (
      <PriceFilter
        onChange={this.onChange}
        handleApplyChanges={this.handleApplyChanges}
        handleDropdownToggle={this.handleDropdownToggle}
        isOpen={this.state.isOpen}
        name={this.state.name}

      />
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setMaximumPrice: price => {
      dispatch(setMaximumPrice(price));
    },
    setMinimumPrice: price => {
      dispatch(setMinimumPrice(price));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PriceFilterContainer);
