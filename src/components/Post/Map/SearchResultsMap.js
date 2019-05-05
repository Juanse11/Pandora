import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import * as parkData from "./skateboard-parks.json";
import skateboard from "./skateboard.svg";

const TOKEN =
  "pk.eyJ1IjoianVhbnNldiIsImEiOiJjam03MjJoeDUwNmc1M3VxeG81YXkyZ3VrIn0.SXMSsc_6gpJuge-YBOUy3Q"; // Set your mapbox token here

export default function ResultsMap() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10
  });

  const [selectedPark, setSelectedPark] = useState(null);

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
        <div style={{ position: "absolute", left: '20px', top: '20px' }}>
          <NavigationControl onViewportChange={viewport => {
            setViewport(viewport);
          }} />
        </div>
        {parkData.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              style={{ width: "20px", height: "20px" }}
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src={skateboard} alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}
        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2> {selectedPark.properties.NAME} </h2>
              <p> {selectedPark.properties.DESCRIPTIO} </p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
