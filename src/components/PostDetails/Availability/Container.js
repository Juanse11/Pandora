import React from "react";
import Availability from "./Availability";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";

export default class Container extends React.Component {
  state = {
    date: undefined,
    focused: true,
    isActive: false,
    startTimeValue: moment(),
    endTimeValue: moment()
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

  handleStartTimeChange = value => {
    this.setState({ startTimeValue: value });
  };

  handleEndTimeChange = value => {
    this.setState({ endTimeValue: value });
  };
  render() {
    return (
      <Availability
        date={this.state.date}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        focused={this.state.focused}
        isActive={this.state.isActive}
        handleStartTimeChange={this.handleStartTimeChange}
        handleEndTimeChange={this.handleEndTimeChange}
        isLoading={false}
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
