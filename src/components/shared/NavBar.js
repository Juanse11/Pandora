import React from "react";
import styled from "styled-components";
import {
  Menu,
  Segment,
  Container,
  Responsive,
  Sidebar,
  Icon,
  Button,
  Input,
  Image
} from "semantic-ui-react";
import logo from "../../assets/purplePandora.svg";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const StyledInput = styled(Input)`
  &&& {
    -webkit-box-shadow: 0px 4px 15px -11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 15px -11px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 15px -11px rgba(0, 0, 0, 0.75);
  }
`;

export default class NavBar extends React.Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyComputer.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          onHide={this.handleSidebarHide}
          vertical
          direction="left"
          visible={sidebarOpened}
        >
          <Menu.Item as="a">Publica tu Empresa</Menu.Item>
          <Menu.Item as="a">Registrate</Menu.Item>
          <Menu.Item as="a">Inicia Sesion</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <div>
            <Menu
              size="large"
              borderless
              pointing={false}
              style={{
                backgroundColor: "#fff",
                padding: "0.5em 0",
                borderBottom: "1px solid rgb(228, 228, 228)",
                boxShadow: "none",
                borderRadius: 0,
                borderRight: 0
              }}
            >
              <Menu.Item as="a">
                <Image size="mini" src={logo} />
              </Menu.Item>
              <Menu.Item style={{ width: "25%" }}>
                <Input
                  icon={{ name: "search", circular: true, link: true }}
                  placeholder="Buscar"
                  size="large"
                />
              </Menu.Item>
              <Menu.Item position="right">
                <Button
                  style={{
                    background: "none",
                    color: "#4f4b65",
                    fontSize: "1em",
                    fontWeight: 600,
                    borderRadius: 0,
                    padding: "1em",
                    paddingRight: "0.5em"
                  }}
                >
                  Publica tu Empresa
                </Button>
                <Button
                  style={{
                    background: "none",
                    color: "#4f4b65",
                    fontSize: "1em",
                    fontWeight: 600,
                    borderRadius: 0,
                    padding: "1em",
                    paddingLeft: "0.5em"
                  }}
                >
                  Inicia Sesion
                </Button>
                <Button
                  style={{
                    background: "#3a91aa",
                    color: "#fff",
                    fontSize: "1em",
                    fontWeight: 600,
                    borderRadius: "2px"
                  }}
                >
                  Registrate
                </Button>
              </Menu.Item>
            </Menu>
          </div>
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}
