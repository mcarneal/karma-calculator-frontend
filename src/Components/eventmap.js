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

class EventMap extends React.Component{



    render(){
        const style = {
            width: "100%",
            height: "400px"
        };
        const position = [this.props.lat, this.props.lng]
        return(
            <div className='eventmap'>
                {this.props.lat ?   <Map
                    center={position}
                    style={style}
                    zoom={13}>
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                        attribution="&copy; <a href=&quot;http://osm.org/ copyright&quot;>OpenStreetMap</a> contributors"/>
                    <Marker position={position}>
                        <Popup>You are here</Popup>
                    </Marker>
                </Map> : <p>This event has no map data</p>}
            </div>
        )
    }
}

export default EventMap
