import React from 'react';
import * as eeGeo from 'wrld.js';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux'

class Map extends React.Component{

  state = {
    map: null,
    events : []
  }

  componentDidMount() {
      this.setState({
        map : eeGeo.map("map", "32c8b23dc4d91c553e1d491a8c9cc55a", {
          center: [
            40.70547963400777,
            -74.01334879919888
          ],
          zoom: 16
        })
      }, () => {
        this.renderMarkers()
      })
  }

  renderMarkers = () => {
    let events = this.props.fetch
    events.map((event) => {
      if(event.lat){
           eeGeo.marker([event.lat, event.lng], { title: "My marker" }).addTo(this.state.map)
      } else {
        console.log('false marker')
      }
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.fetch.length !== this.props.fetch.length){
      let firstEvent = this.props.fetch[0]
      this.renderMarkers()
      this.state.map.setView([firstEvent.lat, firstEvent.lng])
    } else {
      console.log('not?')
    }
  }

  animateMap = () => {
    if (this.state.events){
      console.log('inside elements', this.state.events)
    }
  }



  render() {
    const style = {
      width: "100%",
      height: "750px"
    };

    return(
      <div id="map" style={style}>
        {this.animateMap()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(Map)
