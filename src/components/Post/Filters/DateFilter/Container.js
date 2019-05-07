import React from "react";
import DateFilter from "./DateFilter";
import { setDate } from "../../../../actions/filters";
import { connect } from 'react-redux';
import "moment/locale/es";

class DateFilterContainer extends React.Component {
  state = {
    date: undefined,
    name: "Fecha",
    focused: true,
    isActive: false,
    isOpen: undefined
  };

  handleDropdownToggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  handleApplyChanges = () => {
    let name = "Fecha"
    let isActive = false
    if (this.state.date) {
      name = `${this.state.date}`
      isActive = true
    }

    if (this.state.date !== name) {
      this.setState({ name, isActive })
    }
  }

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
      <DateFilter
        date={this.state.date}
        onDateChange={this.onDateChange}
        onFocusChange={this.onFocusChange}
        name={this.state.name}
        focused={this.state.focused}
        isActive={this.state.isActive}
        isOpen={this.state.isOpen}
        handleApplyChanges={this.handleApplyChanges}
        handleDropdownToggle={this.handleDropdownToggle}
      />
    );
  }
}

const mapStateToProps = ({ sports }) => ({ sports });
const mapDispatchToProps = dispatch => {
  return {
    setDate: (date) => dispatch(setDate(date))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DateFilterContainer)
