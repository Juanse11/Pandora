import React from "react";
import { Button, Form, Dropdown } from "semantic-ui-react";

const countryOptions = [
  { key: "futbol", value: "futbol", text: "Futbol" },
  { key: "baloncesto", value: "baloncesto", text: "Baloncesto" },
  { key: "volleyball", value: "volleyball", text: "Volleyball" },
  { key: "tenis", value: "tenis", text: "Tenis" },
  { key: "golf", value: "golf", text: "Golf" },
  { key: "natacion", value: "natacion", text: "Natacion" }
];

const SearchForm = ({ onChange, onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <label>Hola</label>
    <Form.Input
      fluid
      label="Barrio"
      name="barrio"
      placeholder="Escribe un barrio"
      onChange={onChange}
      style={{ margin: "1em 0" }}
    />
    <Form.Field
      label="Deporte"
      name="deporte"
      placeholder="Selecciona un deporte"
      fluid
      onChange={onChange}
      control={Dropdown}
      options={countryOptions}
      search
      selection
      style={{ margin: "1em 0" }}
    />
    <Form.Input
      fluid
      label="Fecha"
      name="fecha"
      placeholder="Selecciona una fecha"
      onChange={onChange}
      style={{ margin: "1em 0" }}
    />
    <div style={{ width: '100%'}}>
      <Button
        type="submit"
        style={{
          "background-color": "#f4656d",
          color: "#ffffff",
          width: '100%',
          marginTop: '0.7em'
        }}
        size="large"
      >
        Buscar
      </Button>
    </div>
  </Form>
);

export default SearchForm;
