import React from 'react';
import './Map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

function MapPage() {
    const position = [state.lat, state.lng]
    return ( 
        <Map className="test" center={position} zoom={state.zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
            </Marker>
        </Map>
    );
}

export default MapPage;