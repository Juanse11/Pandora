import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import { Icon } from "semantic-ui-react";

import styled from "styled-components";

import pin from "../../../assets/maps-and-flags.svg";
import Pin from "./Pin";
const StyledIcon = styled(Icon)`
  &&& {
  }
`;

const TOKEN =
  "pk.eyJ1IjoianVhbnNldiIsImEiOiJjam03MjJoeDUwNmc1M3VxeG81YXkyZ3VrIn0.SXMSsc_6gpJuge-YBOUy3Q"; // Set your mapbox token here

const StyledMarker = styled(Marker)`
  &&& {
    z-index: ${props => (props.isActive ? "9" : "0")};
  }
`;

const PinPoint = styled(Icon)`
  &&&&&&&& {
    color: #483df6;
    cursor: pointer;
    font-size: 15px;
    margin-right: 0.5em;
    z-index: 9;
    height: 100%;
    &::before {
      height: 100%;
    }
  }
`;

export default function PostMap({ coordinates, onCoordinatesChange }) {
  const [viewport, setViewport] = useState({
    latitude: 10.96854,
    longitude: -74.78132,
    zoom: 11
  });

  const [marker, setMarker] = useState({
    latitude: 10.96854,
    longitude: -74.78132
  });

  const _onMarkerDragEnd = event => {
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
    onCoordinatesChange([marker.latitude, marker.longitude]);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/juansev/cjv90yxxp3f911fpfqjwbfduu"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <Marker
          draggable={true}
          offsetLeft={-25}
          offsetTop={-50}
          latitude={marker.latitude}
          longitude={marker.longitude}
          onDragEnd={_onMarkerDragEnd}
        >
          <Pin size={20} />
        </Marker>
      </ReactMapGL>
    </div>
  );
}
