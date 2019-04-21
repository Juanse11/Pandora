import React from "react";
import DateFilter from './DateFilter'
import moment from 'moment'
import 'moment/locale/es'

export default class DateFilterContainer extends React.Component {
  state = {
    date: moment(),
    focused: true
  };

  onDateChange = date => {
    if (date) {
      console.log(date)
      this.setState({ date });
    }
  };
  onFocusChange = () => {
    this.setState({ focused: true});
  };

  render() {
    return <DateFilter date={this.state.date} onDateChange={this.onDateChange} onFocusChange={this.onFocusChange} focused={this.state.focused}  />;
  }
}
