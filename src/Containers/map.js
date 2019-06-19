import React from 'react';
import * as eeGeo from 'wrld.js';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux'
import { newCords } from '../actions'

class Map extends React.Component{

  state = {
    map: null,
    events : []
  }

    componentDidMount() {
      this.setState({
        map : eeGeo.map("map", `${process.env.REACT_APP_MAP_KEY}`, {
          center: [
            40.70547963400777,
            -74.01334879919888
          ],
          zoom: 15
        })
      }, () => {
        this.renderMarkers()
      })
  }

  renderMarkers = () => {
    let events = this.props.fetch
    events.forEach((event) => {
      if(event.lat){
           eeGeo.marker([event.lat, event.lng], { title: "My marker" }).addTo(this.state.map)
      } else {
      }
    })
  }

  componentDidUpdate(prevProps){
    if (prevProps.fetch.length !== this.props.fetch.length){
      let firstEvent = this.props.fetch[0]
      this.renderMarkers()
      this.state.map.setView([firstEvent.lat, firstEvent.lng])
    } else {
    }
  }



  changeView = () =>{
    if (this.props.map_position && this.state.map){
      this.state.map.setView(this.props.map_position)
    }
  }


  clickHandler =()=>{
    if(this.state.map && this.props.new_event){
      let map = this.state.map
      let marker;
      map.addEventListener("click", (e)=> {
      if(marker){
        map.removeLayer(marker)
        marker = eeGeo.marker([e.latlng.lat, e.latlng.lng], { title: "My marker" }).addTo(map)
          // this.props.newCords([e.latlng.lat, e.latlng.lng])
      } else {
        marker = eeGeo.marker([e.latlng.lat, e.latlng.lng], { title: "My marker" }).addTo(map)
          // this.props.newCords([e.latlng.lat, e.latlng.lng])
          this.props.addHandler([e.latlng.lat, e.latlng.lng])
      }

    })
    }
  }



  render() {
    const style = {
      width: "100%",
      height: "850px"
    };



    return(
      <div id="map"
        style={style}
        >
        {this.changeView()}
        {this.clickHandler()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps, {newCords})(Map)
