import React from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";
import styled from "styled-components";
import { SingleDatePicker } from 'react-dates'

const ButtonContainer = styled.div`
  width: 100%;
  height: 80%;
  @media only screen and (min-width: 768px) {
    height: auto;
    display: flex;
    justify-content: center;
  }
`;

const StyledForm = styled(Form)`
  @media only screen and (min-width: 768px) {
    margin: 1em auto;
  }
`;

const countryOptions = [
  { key: "futbol", value: "futbol", text: "Futbol" },
  { key: "baloncesto", value: "baloncesto", text: "Baloncesto" },
  { key: "volleyball", value: "volleyball", text: "Volleyball" },
  { key: "tenis", value: "tenis", text: "Tenis" },
  { key: "golf", value: "golf", text: "Golf" },
  { key: "natacion", value: "natacion", text: "Natacion" }
];

const SearchForm = ({ createdAt, onChange, onSubmit, onDateChange, onFocusChange, calendarFocused }) => (
  <StyledForm onSubmit={onSubmit} size="large">
    <Form.Input
      fluid
      name="barrio"
      placeholder="Barrio"
      onChange={onChange}
      style={{ margin: 0, height: '50px' }}
    />
    <Form.Field
      name="deporte"
      placeholder="Deporte"
      fluid
      onChange={onChange}
      control={Dropdown}
      options={countryOptions}
      search
      selection
      style={{ margin: 0, height: '50px' }}
    />
    <SingleDatePicker
      date={createdAt}
      onDateChange={onDateChange}
      focused={calendarFocused}
      onFocusChange={onFocusChange}
      numberOfMonths={1}
      isOutsideRange={() => false}
      placeholer="Fecha"
    />
    <ButtonContainer>
      <Button
        type="submit"
        style={{
          background: "#483df6",
          fontWeight: 600,
          color: "#fff",
          fontSize: "1.2em",
          border: "1.5px solid #483df6",
          borderRadius: "0.5rem",
          width: "100%",
          alignSelf: "flex-end",
          height: '50px',
          marginRight: 0,
          paddingTop: "0.5em"
        }}
      >
        Buscar
      </Button>
    </ButtonContainer>
  </StyledForm>
);

export default SearchForm;
