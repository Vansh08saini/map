import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Define the custom icon
const customIcon = new L.Icon({
  iconUrl: '/custom-marker.png',  // Path to your custom marker image
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point of the icon (centered)
  popupAnchor: [0, -32] // Position of the popup relative to the icon
});

const markers = [
  { position: [28.6139, 77.209], label: "New Delhi" },
  { position: [19.076, 72.8777], label: "Mumbai" },
  { position: [13.0827, 80.2707], label: "Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore" },
];

const CenterMap = ({ position }) => {
  const map = useMap();
  map.setView(position, map.getZoom());
  return null;
};

const MapComponent = () => {
  const [center, setCenter] = useState([20.5937, 78.9629]); // Initial center over India

  return (
    <MapContainer center={center} zoom={5} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, idx) => (
        <Marker
          key={idx}
          position={marker.position}
          icon={customIcon} // Use the custom icon here
          eventHandlers={{
            click: () => {
              setCenter(marker.position);
            },
          }}
        >
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
      <CenterMap position={center} />
    </MapContainer>
  );
};

export default MapComponent;
