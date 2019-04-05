import React from 'react'
import {
    Button,
    Form
  } from "semantic-ui-react"

const SearchForm = props => (
    <Form style={{ margin: '2em 1em 0em 1em' }}>
      <label>Hola</label>
      <Form.Input fluid label="Barrio" placeholder="Escribe un barrio" />
      <Form.Input fluid label="Deporte" placeholder="Selecciona un deporte" />
      <Form.Input fluid label="Fecha" placeholder="Selecciona un dia" />
      <Button
        type="submit"
        style={{
          "background-color": "#f4656d",
          color: "#ffffff",
          marginLeft: '17.3em',
          padding: '15px 22px'
        }}
        size='large'
      >
        Search
      </Button>
    </Form>
)

export default SearchForm