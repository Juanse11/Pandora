import React from "react";
import styled from "styled-components";
import { Label } from 'semantic-ui-react';

const StyledMarker = styled(Label)`
  &&&&&&&& {
    white-space: nowrap;
    position: absolute;
    ${props => ({
      background: props.isActive ? "#3a91aa" : "white",
      zIndex: props.isActive ? 9 : 1,
      left: props.x,
      top: props.y,
      padding: "4px 5px 4px 6px",
      fontSize: "14px",
      fontWeight: 800,
      color: props.isActive ? "#fff" : "#767676",
      boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 4px 0px",
      border: "1px solid rgba(0, 0, 0, 0.2)",
      borderRadius: "2px",
      transition: 'none'
    })};
    &::before {
      transition: none;
    }
  }
`;

export default class CustomMarker extends React.PureComponent {
  render() {
    
    
    return (
      <StyledMarker
        isActive={this.props.isActive}
        pointing="below"
      >
        {"$300,000 COP"}
      </StyledMarker>
    );
  }
}
