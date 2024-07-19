// components/Location.js
import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import the default icon and marker icon assets
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser"));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          },
          {enableHighAccuracy: true}
        );
      }
    });
  };
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function LocationFetcher() {
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        setPosition([location.latitude, location.longitude]);
        setAccuracy(location.accuracy);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Patient Current Location</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {!position && !error && <CircularProgress />}
      {position && (
        <MapContainer center={position} zoom={18} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Patient's Current Location</Popup>
          </Marker>
          {accuracy && (
            <Circle
              center={position}
              radius={accuracy}
              color="blue"
              fillColor="blue"
              fillOpacity={0.2}
            />
          )}
        </MapContainer>
      )}
    </Container>
  );
}

export default LocationFetcher;
