import React from "react";
import PriceFilter from "./PriceFilter";
import { connect } from "react-redux";
import { setMaximumPrice, setMinimumPrice } from "../../../../actions/filters";

class PriceFilterContainer extends React.Component {
  state = {
    minimum: 0,
    maximum: 0,
    name: "Precio",
    isActive: false
  };

  onChange = (e, data) => {
    const field = data.name;
    const value = Number(data.value);
    this.setState(() => ({ [field]: value }));
  };

  handleApplyChanges = () => {
    this.handleActiveFilter();
    this.props.setMaximumPrice(this.state.maximum);
    this.props.setMinimumPrice(this.state.minimum);
  };

  handleActiveFilter = () => {
    let name = "Precio";
    let isActive = false;
    if (this.state.minimum && this.state.maximum) {
      name = `$${this.state.minimum} COP - $${this.state.maximum} COP`;
      isActive = true;
    } else if (this.state.minimum) {
      name = `Desde $${this.state.minimum} COP`;
      isActive = true;
    } else if (this.state.maximum) {
      name = `Hasta $${this.state.maximum} COP`;
      isActive = true;
    }

    if (this.state.name !== name) {
      this.setState({ name, isActive})
    }
  };

  render() {
    return (
      <PriceFilter
        onChange={this.onChange}
        handleApplyChanges={this.handleApplyChanges}
        isOpen={this.state.isOpen}
        name={this.state.name}
        isActive={this.state.isActive}
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

const mapStateToProps = ({ filters: { price } }) => {
  return {
    price
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceFilterContainer);
