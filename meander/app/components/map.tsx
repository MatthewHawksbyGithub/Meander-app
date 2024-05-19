'use client'

import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import '../globals.css';

export default function Map() {
  const [geoData, setGeoData] = useState({ lat: 49.2791, lng: -122.9202 });

  return (
    <MapContainer center={[geoData.lat, geoData.lng]} zoom={12} style={{ height: '40vh' }}>
      <TileLayer
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
    </MapContainer>
  );
}