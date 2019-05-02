import React from "react";
import styled from "styled-components";
import {
  Button,
  Header,
  Modal,
  Container,
  Divider,
  Icon
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
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 13px 22px;
    text-align: center;
    font-size: 16px;
    font-weight: 800;
    background: none;
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
  }
`;

const FacebookButton = styled(StyledButton)`
  &&& {
    color: #fff;
    background: rgb(69, 104, 178);
    border-radius: 4px;
    border: 2px solid transparent;
    margin-bottom: 8px;
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

const Register = ({ handleOpen, handleClose, modalOpen, children }) => (
  <StyledModal
    trigger={
      <RegisterButton onClick={handleOpen}>Registrate</RegisterButton>
    }
    open={modalOpen}
    onClose={handleClose}
    size="small"
    style={{ color: "black" }}
    closeIcon
  >
    <Content>
      <Title>¡Crea tu cuenta gratis!</Title>
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
        <EmailButton>
          <Icon
            name="mail outline"
            style={{ color: "#fff", fontSize: "18px" }}
          />
          <span style={{ alignSelf: "flex-end" }}>
            Registrarse con un correo electrónico
          </span>{" "}
        </EmailButton>
        <StyledDivider />
        <Footer>
          <span>¿Ya tienes una cuenta en Pandora?</span>
          <LoginAction>Inicia sesion</LoginAction>
        </Footer>
      </ButtonsBox>
    </Content>
  </StyledModal>
);

export default Register;
