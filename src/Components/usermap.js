import React from 'react';
import * as eeGeo from 'wrld.js';
import 'leaflet/dist/leaflet.css';

class Map extends React.Component{

    componentDidMount() {
        const map = eeGeo.map("map", "32c8b23dc4d91c553e1d491a8c9cc55a",{
            center: [40.70547963400777, -74.01334879919888],
            zoom: 16
        })

        let marker = eeGeo.marker([40.70547963400777, -74.01334879919888], { title: "My marker" }).addTo(map)

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

export default Map
