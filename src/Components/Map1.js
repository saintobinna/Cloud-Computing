// src/components/MapSection.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map1.css"; // Import CSS file for styling

const Map1 = () => {
  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerClassName="google-map"
          center={defaultCenter}
          zoom={10}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map1;
