import React from "react";
import Availability from "./Availability";
import { connect } from "react-redux";
import "moment/locale/es";

export default class Container extends React.Component {
  state = {
    date: undefined,
    focused: true,
    isActive: false,
  };


  handleApplyChanges = () => {
    let name = "Fecha";
    let isActive = false;
    if (this.state.date) {
      name = `${this.state.date}`;
      isActive = true;
    }

    if (this.state.date !== name) {
      this.setState({ name, isActive });
    }
  };

  onDateChange = date => {
    if (date) {
      this.setState({ date });
    }
  };
  onFocusChange = () => {
    this.setState({ focused: true });
  };

  render() {
    return (
      <Availability
        date={this.state.date}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        focused={this.state.focused}
        isActive={this.state.isActive}
      />
    );
  }
}

// const mapStateToProps = ({ sports }) => ({ sports });
// const mapDispatchToProps = dispatch => {
//   return {
//     setDate: date => dispatch(setDate(date))
//   };
// };
