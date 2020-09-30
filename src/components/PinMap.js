import TileLayer from "react-leaflet/lib/TileLayer";
import React, { Fragment } from "react";
import Map from "react-leaflet/lib/Map";
import Popup from "react-leaflet/lib/Popup";
import Marker from "react-leaflet/lib/Marker";
import Lefleat, { popup } from "leaflet";
import 'leaflet/dist/leaflet.css'

const MyPopupMarker = ({ content, position }) => (
  <Marker position={position} icon={iconMarker}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ( {markers} ) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

var iconMarker = Lefleat.icon({
    iconUrl: 'https://www.iconpacks.net/icons/2/free-pine-icon-1577-thumb.png',
    iconSize: [38, 95], // size of the icon    
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

export class PinMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markers: [
                { key: 'marker1', position: [45.65, 0.15], content: 'My first popup' },
                { key: 'marker2', position: [45.65, 0.18], content: 'My second popup' },
                { key: 'marker3', position: [45.65, 0.20], content: 'My third popup' },
            ],
        }
    }

    render() {
        return ( 
            <Map style = { { height: '800px', width: '100%' } } center = { [45.65, 0.15] } zoom = { 13 } onClick={this.addMarker}>
                <TileLayer attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                <MyMarkersList markers={this.state.markers} />
            </Map>
        );
    }
}