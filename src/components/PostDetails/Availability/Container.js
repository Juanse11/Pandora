import React from "react";
import Availability from "./Availability";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/es";

import API from '../../../api/api'

export default class Container extends React.Component {
  state = {
    date: moment().startOf("day"),
    focused: true,
    isActive: false,
    startTimeValue: moment(),
    endTimeValue: moment(),
    isLoading: false
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
      this.setState({ date: date.startOf("day") });
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

  handleSubmit = () => {
    if (
      this.state.startTimeValue &&
      this.state.endTimeValue &&
      this.state.date
    ) {
      let startDate = this.state.date.clone().add({
        hours: this.state.startTimeValue.hour(),
        minutes: this.state.startTimeValue.minute()
      });

      let endDate = this.state.date.clone().add({
        hours: this.state.endTimeValue.hour(),
        minutes: this.state.endTimeValue.minute()
      });
      console.log(startDate.format(), endDate.format());
      
    }
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
        handleSubmit={this.handleSubmit}
        isLoading={false}
        isSubmit={false}
        price={this.props.price}
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
