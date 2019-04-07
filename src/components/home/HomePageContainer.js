import React, { Component } from "react";
import {
  Container,
  Button,
  Image,
  Dropdown,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import HomePageHeading from "./HomePageHeading";
import logo from "../../assets/Pandora.svg";
import background from "../../assets/background4.png";

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

export default class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: false });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              padding: "0em",
              backgroundImage: `url(${background})`,
              minHeight: 700,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundColor: "rgba(255, 249, 192, 0.7)"
            }}
            vertical
          >
            <Menu
              size="large"
              borderless
              pointing={false}
              secondary
              style={{ margin: "0 3em" }}
            >
              <Menu.Item onClick={this.handleItemClick} as="a">
                <Image size="mini" src={logo} />
              </Menu.Item>
              <Menu.Item position="right">
                <Button style={{ background: "#006beb", color: "#fff", borderRadius: 0 }}>
                  Registrate
                </Button>
                <Button style={{ background: "#f4656d", color: "#fff", borderRadius: 0 }}>
                  Inicia Sesion
                </Button>
              </Menu.Item>
            </Menu>
            <HomePageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}
