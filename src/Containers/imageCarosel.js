import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class DemoCarousel extends Component {
    render() {
        return (
          <div className='backgroundcontainter'>
            <div className='Text area'>
              <h2>Welcome To</h2>
              <h2>Karma Calculator</h2>
            </div>
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} width='100%'>
                <div>
                    <img className='bgimg' src={require('../image4.jpg')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img
                    className='bgimg'
                     src={require('../image5.jpg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img
                      className='bgimg'
                      src={require('../image7.jpg')} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
          </div>
        );
    }
}

export default DemoCarousel
