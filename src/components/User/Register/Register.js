import React, { Fragment } from "react";
import styled from "styled-components";
import {
  Button,
  Header,
  Modal,
  Container,
  Divider,
  Icon,
  Form,
  Checkbox,
  Input
} from "semantic-ui-react";
import facebook from "../../../assets/facebook.svg";
import google from "../../../assets/google.svg";

const RegisterButton = styled(Button)`
  &&& {
    background: none;
    color: #4f4b65;
    font-size: 1em;
    font-weight: 600;
    &:hover {
      background: none;
      color: #4f4b65;
    }
  }
`;

const StyledModal = styled(Modal)`
  &&&& {
    max-width: 100%;
    width: 568px;
  }
`;

const Title = styled(Header)`
  &&&& {
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    border-bottom: none;
  }
`;

const Content = styled(Modal.Content)`
  &&&& {
    border: none;
    padding: 32px;
  }
`;

const ButtonsBox = styled(Container)`
  &&&& {
    width: 100%;
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
    background: #483df6;
    &:hover {
      background: #483df6;
      color: #fff;
    }
    &:focus {
      background: #483df6;
      color: #fff;
    }
    &:active {
      background: #483df6;
      color: #fff;
    }
  }
`;

const GmailButton = styled(StyledButton)`
  &&& {
    background: #fff;
    border-radius: 4px;
    color: #4f4b65;
    border: 2px solid rgb(118, 118, 118);
    &:hover {
      background: none;
      color: #4f4b65;
    }
    &:active {
      background: none;
      color: #4f4b65;
    }
    &:focus {
      background: none;
      color: #4f4b65;
    }
  }
`;

const FacebookButton = styled(StyledButton)`
  &&& {
    color: #fff;
    background: rgb(69, 104, 178);
    border-radius: 4px;
    border: 2px solid transparent;
    margin-bottom: 8px;
    &:active {
      background: rgb(69, 104, 178);
      color: #fff;
    }
    &:focus {
      background: rgb(69, 104, 178);
      color: #fff;
    }
    &:hover {
      background: rgb(69, 104, 178);
      color: #fff;
    }
  }
`;

const EmailButton = styled(StyledButton)`
  &&& {
    background: #3a91aa;
    color: #fff;
    border-radius: 4px;
    border: 2px solid transparent;
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

const StyledDivider = styled(Divider)`
  &&& {
    margin: 22px 0;
  }
`;

const Image = styled.img`
  &&& {
    align-self: self-start;
    height: 18px;
    width: 18px;
    margin-right: 12px;
  }
`;

const Footer = styled.p`
  &&& {
    font-size: 16px;
    color: #4f4b65;
    font-weight: 400;
  }
`;
const RegisterHeader = styled.p`
  &&& {
    text-align: center;
    font-size: 14px;
    color: #4f4b65;
    font-weight: 700;
  }
`;
const LoginAction = styled.a`
  font-weight: 700;
  color: #483df6;
  margin: 0 8px;
  cursor: pointer;
  &:hover {
    color: #483df6;
    text-decoration: underline;
    text-decoration-color: #483df6;
  }
`;

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

const Register = ({
  handleOpen,
  handleClose,
  modalOpen,
  handleEmailClick,
  isEmailClicked
}) => (
  <React.Fragment>
    {isEmailClicked ? (
      <StyledModal
        trigger={
          <Button
            style={{ background: "none", fontSize: "15px", color: "#4f4b65", fontWeight:600 }}
            onClick={handleOpen}
          >
            Registrate
          </Button>
        }
        open={modalOpen}
        onClose={handleClose}
        size="small"
        closeIcon
      >
        <Content>
          <RegisterHeader>
            <span>Regístrate con </span>
            <a style={{ color: "#483df6", cursor: "pointer" }}> Facebook </a>
            <span> o </span>
            <a style={{ color: "#483df6", cursor: "pointer" }}> Google </a>
          </RegisterHeader>
          <StyledDivider horizontal>
            <span style={{ color: "#767676", fontSize: "10px" }}>o</span>
          </StyledDivider>
          <ButtonsBox>
            <Form>
              <Form.Field>
                <StyledInput icon="mail" placeholder="Correo electrónico" />
              </Form.Field>
              <Form.Field>
                <StyledInput icon="user" placeholder="Nombre" />
              </Form.Field>
              <Form.Field>
                <StyledInput icon="user" placeholder="Apellido" />
              </Form.Field>
              <Form.Field>
                <StyledInput icon="lock" placeholder="Contraseña" />
              </Form.Field>
              <Form.Field>
                <Checkbox label="Acepto los términos y condiciones." />
              </Form.Field>
              <StyledButton type="submit">Registrarse</StyledButton>
            </Form>
            <StyledDivider />
            <Footer>
              <span>¿Ya tienes una cuenta en Pandora?</span>
              <LoginAction>Inicia sesion</LoginAction>
            </Footer>
          </ButtonsBox>
        </Content>
      </StyledModal>
    ) : (
      <StyledModal
        trigger={
          <Button style={{ background: "none", fontSize: "15px", color: "#4f4b65", fontWeight:600 }} onClick={handleOpen}>
            Registrate
          </Button>
        }
        open={modalOpen}
        onClose={handleClose}
        size="small"
        closeIcon
      >
        <Content>
          <Title>¡Crea una cuenta gratis!</Title>
          <ButtonsBox>
            <FacebookButton>
              <Image src={facebook} />
              <span style={{ alignSelf: "flex-end" }}>
                Registrarse con Facebook
              </span>
            </FacebookButton>
            <GmailButton>
              <Image src={google} />
              <span>Registrarse con Google</span>
            </GmailButton>
            <StyledDivider horizontal>
              <span style={{ color: "#767676", fontSize: "12px" }}>o</span>
            </StyledDivider>
            <EmailButton onClick={handleEmailClick}>
              <Icon
                name="mail outline"
                style={{ color: "#fff", fontSize: "18px" }}
              />
              <span style={{ alignSelf: "flex-end" }}>
                Registrarse con un correo electrónico
              </span>
            </EmailButton>
            <StyledDivider />
            <Footer>
              <span>¿Ya tienes una cuenta en Pandora?</span>
              <LoginAction>Inicia sesion</LoginAction>
            </Footer>
          </ButtonsBox>
        </Content>
      </StyledModal>
    )}
  </React.Fragment>
);
export default Register;
