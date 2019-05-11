import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Divider, Grid } from "semantic-ui-react";
import { DayPickerSingleDateController } from "react-dates";

import Subtitle from "../Subtitle";
import HourPicker from "./HourPicker";

const Title = styled.p`
  &&& {
    margin: 0;
    font-size: 24px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const Box = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
  }
`;

const Availability = ({ date, onDateChange, onFocusChange }) => (
  <Box>
    <Subtitle>
      <Title>Disponibilidad</Title>
    </Subtitle>
    <Grid>
      <Grid.Column style={{ padding: 0 }} computer={8}>
        <DayPickerSingleDateController
          style={{ width: "100%" }}
          date={date}
          onDateChange={onDateChange}
          focused={true}
          onFocusChange={onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => moment().diff(day) >= 50000000}
          hideKeyboardShortcutsPanel
        />
      </Grid.Column>
      <Grid.Column computer={8}>
        <HourPicker />
      </Grid.Column>
    </Grid>
    <Divider style={{ margin: "24px 0" }} />
  </Box>
);

export default Availability;
