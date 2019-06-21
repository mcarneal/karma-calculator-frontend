import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class NewEventMap extends React.Component{


    state = {
        marker : this.props.marker
    }


    mapOnclick = (e) => {
        this.setState({marker: [e.latlng.lat, e.latlng.lng]})
        this.props.mapClickHandler(e)
    }

    render(){
        const style = {
            width: "100%",
            height: "400px"
        };
        const position = [40.70547963400777, -74.01334879919888]
        return(
            <div className='neweventmap'>
                <Map
                    onClick={this.mapOnclick}
                    center={position}
                    style={style}
                    zoom={13}>
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                        attribution="&copy; <a href=&quot;http://osm.org/ copyright&quot;>OpenStreetMap</a> contributors"/>
                    {this.state.marker ?
                            <Marker position={this.state.marker}>
                                <Popup>You are here</Popup>
                            </Marker> : null}
                        </Map>
                    </div>
        )
    }
}

export default NewEventMap
