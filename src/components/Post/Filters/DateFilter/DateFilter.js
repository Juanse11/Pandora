import React from "react";
import { DayPickerSingleDateController } from "react-dates";
import styled from "styled-components";
import moment from "moment";
import FilterWrapper from "../FilterWrapper";

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 10px;
  }
`;

const Submit = styled.a`
  &&& {
    color: #3a91aa 
    align-self: flex-end;
    font-size: 14px;
    font-weight: 600;
    margin-top: 15%;
    margin-right: 3%;

    &:hover {
      text-decoration: underline;
      text-decoration-color: #3a91aa;
    }
  }
`;

const DateFilter = ({ date, onDateChange, focused, onFocusChange }) => (
  <FilterWrapper name="Fecha">
    <Box>
      <DayPickerSingleDateController
        date={date}
        onDateChange={onDateChange}
        focused={true}
        onFocusChange={onFocusChange}
        numberOfMonths={1}
        isOutsideRange={day => moment().diff(day) >= 0}
        hideKeyboardShortcutsPanel
      />
    </Box>
  </FilterWrapper>
);

export default DateFilter;
