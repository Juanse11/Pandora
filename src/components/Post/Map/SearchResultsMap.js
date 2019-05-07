import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import * as parkData from "./skateboard-parks.json";
import skateboard from "./skateboard.svg";
import CustomMarker from "./MapLabel";
const TOKEN =
  "pk.eyJ1IjoianVhbnNldiIsImEiOiJjam03MjJoeDUwNmc1M3VxeG81YXkyZ3VrIn0.SXMSsc_6gpJuge-YBOUy3Q"; // Set your mapbox token here

export default function ResultsMap(props) {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 9
  });
  
  return (
    <div
      style={{
        position: "fixed",
        width: "inherit",
        height: "calc(100vh - 127px)"
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
        <div style={{ position: "absolute", left: "20px", top: "20px" }}>
          <NavigationControl
            onViewportChange={viewport => {
              setViewport(viewport);
            }}
          />
        </div>
        {parkData.features.map(park => (
            <CustomMarker
              isActive={park.properties.PARK_ID === props.selectedPark.id}
              latitude={park.geometry.coordinates[1]}
              longitude={park.geometry.coordinates[0]}
            />
        ))}
      </ReactMapGL>
    </div>
  );
}
