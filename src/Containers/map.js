import React from 'react';
import * as eeGeo from 'wrld.js';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux'

class Map extends React.Component{

  componentDidMount() {
      const map = eeGeo.map("map", "32c8b23dc4d91c553e1d491a8c9cc55a",{
      center: [40.70547963400777, -74.01334879919888],
      zoom: 16
      })
      let events = this.props.fetch
      events.map((event) => {
        if(event.lat){
             eeGeo.marker([event.lat, event.lng], { title: "My marker" }).addTo(map)
        } else {
          console.log('false marker')
        }
      })
  }

  componentDidUpdate(prevProps){

  }

  render() {
    const style = {
      width: "100%",
      height: "500px"
    };

    return(
      <div id="map" style={style}>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(Map)
