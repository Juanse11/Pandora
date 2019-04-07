import React from 'react'
import {
    Button,
    Form
  } from "semantic-ui-react"

const SearchForm = ({ onChange, onSubmit }) => (
    <Form style={{ margin: '0em 1em 0em 1em' }} onSubmit={onSubmit}>
      <label>Hola</label>
      <Form.Input fluid label="Barrio" name='barrio' placeholder="Escribe un barrio" onChange={onChange} />
      <Form.Input fluid label="Deporte" name='deporte' placeholder="Selecciona un deporte" onChange={onChange} />
      <Form.Input fluid label="Fecha" name='fecha' placeholder="Selecciona un dia" onChange={onChange} />
      <Button
        type="submit"
        style={{
          "background-color": "#006beb",
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