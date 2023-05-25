import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner1 from "../../../../assets/home/01.jpg";
import Banner2 from "../../../../assets/home/02.jpg";
import Banner3 from "../../../../assets/home/03.png";
import Banner4 from "../../../../assets/home/04.jpg";
import Banner5 from "../../../../assets/home/05.png";
import Banner6 from "../../../../assets/home/06.png";
import "./Banner.css";
const Banner = () => {
    return (
      <div className="">
        <Carousel autoPlay={true}>
          <div>
            <img className='w-full' src={Banner1} />
          </div>
          <div>
            <img src={Banner2} />
          </div>
          <div>
            <img src={Banner3} />
          </div>
          <div>
            <img src={Banner4} />
          </div>
          <div>
            <img src={Banner5} />
          </div>
          <div>
            <img src={Banner6} />
          </div>
        </Carousel>
      </div>
    );
};

export default Banner;