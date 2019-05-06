import React from 'react';
import { withRouter} from 'react-router-dom'
import UserNav from '../Components/usernav'
import GlobalNav from '../Components/globalnav'
import * as eeGeo from 'wrld.js';
import { connect } from 'react-redux'


class UserMap extends React.Component{







   componentDidMount(){



   }

   componentDidUpdate(prevProps){

     if(prevProps.my_events !== this.props.my_events){
       const map = eeGeo.map("map", "32c8b23dc4d91c553e1d491a8c9cc55a",{
        center: [40.70547963400777, -74.01334879919888],
        zoom: 16
      })

      let marker = eeGeo.marker([40.70547963400777, -74.01334879919888], { title: "My marker" }).addTo(map)

      marker.bindPopup("This is the Transamerica Pyramid");
      ;
     } else {
       console.log('not working')
     }
   }


   onClick = (e) => {
     console.log(e.latlng)
   }



  render(){
    console.log('usermap!!!!!', this.props.events)
    const test = ['test']
    const style = {
    width: "100%",
    height: "500px"
    };
    const position = [40.70547963400777, -74.01334879919888]
    return(
      <div id="map"
            style={style}
            onClick={this.onClick}>

      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(UserMap)
