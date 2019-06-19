import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
          <div className='backgroundcontainter'>
            <div className='Text area'>
               <h1 style={{ fontFamily: 'Pacifico' }}>Welcome to Karma Calculator</h1>
            </div>
            <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} width='100%'>
                <div>
                    <img className='bgimg' alt='backgroundimg1' src={require('../image4.jpg')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                  <img alt ='backgroundimg2'
                    className='bgimg'
                     src={require('../image5.jpg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img
                        alt='backgroundimg3'
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
