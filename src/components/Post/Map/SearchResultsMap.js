import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoianVhbnNldiIsImEiOiJjam03MjJoeDUwNmc1M3VxeG81YXkyZ3VrIn0.SXMSsc_6gpJuge-YBOUy3Q"; // Set your mapbox token here

export default function ResultsMap() {
  const [viewport, setViewport] = useState({
    latitude: 10.9989,
    longitude: -74.7988,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/juansev/cjv90yxxp3f911fpfqjwbfduu"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      />
    </div>
  );
}
