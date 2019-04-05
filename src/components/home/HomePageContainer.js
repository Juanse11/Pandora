import React, { Component } from "react";
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import HomePageHeading from "./HomePageHeading";
import logo from "../../assets/logo.png";
import background from "../../assets/background.png";


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
              minHeight: 700,
              backgroundImage: `url(${background})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundColor: "rgba(255, 249, 192, 0.7)"
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{ border: "none" }}
            >
              <Container>
                <Menu.Item position="left">
                  <Menu.Item as="a" inverted={!fixed}>
                    <img src={logo} />
                  </Menu.Item>
                </Menu.Item>

                <Menu.Item position="right">
                  <Menu.Item as="a" inverted={!fixed}>
                    Registrate
                  </Menu.Item>
                  <Menu.Item as="a" inverted={!fixed}>
                    Inicia Sesion
                  </Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
            <HomePageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}
