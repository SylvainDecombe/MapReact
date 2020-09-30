import TileLayer from "react-leaflet/lib/TileLayer";
import React, {Fragment} from "react";
import Map from "react-leaflet/lib/Map";
import Popup from "react-leaflet/lib/Popup";
import Marker from "react-leaflet/lib/Marker";

const MyPopupMarker = ({ content, position }: Props) => (
    <Marker position={position}>
        <Popup>{content}</Popup>
    </Marker>
)

const MyMarkersList = ({ markers }: { markers: Array<any> }) => {
    const items = markers.map(({ key, ...props }) => (
        <MyPopupMarker key={key} {...props} />
    ))
    return <Fragment>{items}</Fragment>
}


export class PinMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            /** Tableau des markers*/
            markers: [
                { key: 'marker1', position: [51.5, -0.1], content: 'My first popup' },
                { key: 'marker2', position: [51.51, -0.1], content: 'My second popup' },
                { key: 'marker3', position: [51.49, -0.05], content: 'My third popup' },
            ],
        }
    }

    render() {
        return (
            <Map style={{height: '800px', width: '100%'}} center={[51.505, -0.09]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <MyMarkersList markers={this.state.markers} />
            </Map>
        );
    }
}
