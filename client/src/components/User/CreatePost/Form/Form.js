import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "semantic-ui-react";
import ReactMap from "../Map";

const StyledInput = styled(Input)`
  &&& {
    min-height: 46px;
    &&&&&&&&&&&&&&&& > input {
      &::placeholder {
        font-size: 16px;
        color: #4f4b65cc;
        padding-top: 12px;
        padding-bottom: 12px;
      }
    }
    &&&&&&&&&&&&&&&& > i {
      font-size: 16px;
      color: #4f4b65cc;
    }
  }
`;

const StyledButton = styled(Button)`
  &&& {
    min-height: 48px;
    max-height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 13px 22px;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    color: #fff;
    background: #3a91aa;
    &:hover {
      background: #3a91aa;
      color: #fff;
    }
    &:focus {
      background: #3a91aa;
      color: #fff;
    }
    &:active {
      background: #3a91aa;
      color: #fff;
    }
  }
`;

const Label = styled.p`
  &&& {
    font-size: 16px;
    color: #4f4b65;
    font-weight: 600;
    margin: 0;
    margin-bottom: 6px;
  }
`;

const RegisterForm = ({
  onChange,
  onFilesChange,
  onSubmit,
  onCoordinatesChange,
  coordinates
}) => (
  <Form onSubmit={onSubmit}>
    <Label>Título</Label>
    <Form.Field>
      <StyledInput
        onChange={onChange}
        name="title"
        icon="mail"
        placeholder="¿Qué publicas?"
      />
    </Form.Field>
    <Label>Fotos del establecimiento</Label>
    <Form.Field>
      <StyledInput
        type="file"
        onChange={onFilesChange}
        name="pictures"
        icon="camera"
        multiple
      />
    </Form.Field>
    <Label>Dirección</Label>
    <Form.Field>
      <StyledInput
        onChange={onChange}
        name="city"
        icon="map"
        placeholder="¿En qué ciudad?"
      />
    </Form.Field>
    <Form.Field>
      <StyledInput
        onChange={onChange}
        name="address"
        icon="map"
        placeholder="¿Dónde está ubicado?"
      />
    </Form.Field>
    <Form.Field>
      <StyledInput
        onChange={onChange}
        name="price"
        icon="money bill alternate outline"
        placeholder="¿Cuánto es el precio de alquiler por hora?"
      />
    </Form.Field>
    <Label>Ubica el establecimento</Label>
    <Form.Field>
      <div style={{ width: "100%", height: "200px" }}>
        <ReactMap onCoordinatesChange={onCoordinatesChange} />
      </div>
    </Form.Field>

    <Form.Field>
      <StyledInput
        value={coordinates}
        disabled
        onChange={onChange}
        name="coordinates"
        icon="map marker alternate"
        placeholder="Coordenadas"
      />
    </Form.Field>
    <StyledButton type="submit">Publicar</StyledButton>
  </Form>
);

export default RegisterForm;
