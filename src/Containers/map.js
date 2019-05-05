import React from 'react';
import { withRouter} from 'react-router-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet';
import UserNav from '../Components/usernav'
import GlobalNav from '../Components/globalnav'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class GlobalMap extends React.Component{

  state = {
    markers : [{
      latlng : [40.70547963400777, -74.01334879919888]}
    ]
    }


  mapOnclick = (e) => {

    let marker = e.latlng
    this.setState({markers : [...this.state.markers, {
      latlng : [e.latlng.lat, e.latlng.lng]
    }]})
  }

  componentDidMount(){

  }

  renderMarkers = () => {
     return this.state.markers.map(marker =>
      <Marker position={marker.latlng}>
        <Popup>You are here</Popup>
      </Marker>
    )
   }



  render(){
    let threemap = L.eeGeo.map('map', '32c8b23dc4d91c553e1d491a8c9cc55a', {
      center: [51.517327, -0.120005],
      zoom: 15
    });
    
    const style = {
    width: "100%",
    height: "500px"
    };
    const position = [40.70547963400777, -74.01334879919888]
    return(
      <div className="window">
        <div className="usernav">
          <UserNav />
        </div>
        <div className='maincontainer'>
          <div className='globalnav'>
            <GlobalNav />
          </div>
          <div className='map-container`'>
            <div className='leaflet-container'>
              <Map
                center={position}
                style={style}
                zoom={13}
                onClick={this.mapOnclick}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href=&quot;http://osm.org/ copyright&quot;>OpenStreetMap</a> contributors"/>
                {this.renderMarkers()}
              </Map>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default GlobalMap
