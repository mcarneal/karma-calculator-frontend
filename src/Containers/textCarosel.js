import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class textCarosel extends Component {
    render() {
        return (
          <div>
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} width='100%'>
                <div>
                  <h1>Test</h1>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <h1>Second test</h1>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                  <h1>Third</h1>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </div>
        );
    }
}

export default textCarosel
