"use client"
import './styles.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from './data';

const Testimonial = () => {
  const [settings, setSettings] = useState({

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  })
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 10007) {
        if (window.innerWidth < 673) {
          setSettings({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          })
        } else {
          setSettings({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          })
        }
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <div className='testimonial'>
      <span className='title'>Testimonial</span>
      <h1>What Our Client Say</h1>
      <div className="container">
        <div className="testimonials">
          <Slider {...settings} className='slider'>
            {data.map((data, index) => (
              <SinlgeTestimonial data={data} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { useEffect, useState } from 'react';
const SinlgeTestimonial = ({ data }) => {
  return (
    <div className="cardContainer" key={data.name}>
      <div className="imgContainer">
        <img src={data.img} />
      </div>
      <div className="icon">
        <BiSolidQuoteAltLeft />
      </div>
      <div className="textContainer">
        <div className="desc">
          <p>{data.desc}</p>
        </div>
        <div className="detail">
          <h3>{data.name}</h3>
          <span>{data.position}</span>
        </div>
      </div>
    </div>
  )
}
