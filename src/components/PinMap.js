import TileLayer from "react-leaflet/lib/TileLayer";
import React, { Fragment } from "react";
import Map from "react-leaflet/lib/Map";
import Popup from "react-leaflet/lib/Popup";
import Marker from "react-leaflet/lib/Marker";
import Lefleat, { popup } from "leaflet";

const MyPopupMarker = ({ content, position }: Props) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<MarkerData> }) => {
  const items = markers.map(({ key, ...props }) => (
    <MyPopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

var myIcon = Lefleat.icon({
    iconUrl: 'https://static.wixstatic.com/media/2cd43b_73cacdc0c2434cfe8a83b5bca295e440~mv2.png/v1/fill/w_614,h_614,fp_0.50_0.50,lg_1/2cd43b_73cacdc0c2434cfe8a83b5bca295e440~mv2.png',
    iconSize: [38,29],
});

export class PinMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            /** Tableau des markers*/
            markers: [
                { key: 'marker1', position: [45.65, 0.20], content: 'My first popup' },
                { key: 'marker2', position: [45.65, 0.35], content: 'My second popup' },
                { key: 'marker3', position: [45.65, 0.5], content: 'My third popup' },
            ],
        }
    }

    render() {
        return ( 
            <Map style = { { height: '800px', width: '100%' } } center = { [45.65, 0.15] } zoom = { 13 } >
                <TileLayer attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url = 'https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
                <Marker position={ [45.62, 0.15] } icon={myIcon}> 
                    <Popup> Text </Popup>
                </Marker>
            </Map>
        );
    }
}