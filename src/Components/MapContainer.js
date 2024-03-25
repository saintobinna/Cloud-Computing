import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const defaultCenter = { lat: 40.712776, lng: -74.005974 };

  return (
    <LoadScript
      googleMapsApiKey={null} // Pass null for the apiKey
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        zoom={10}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
