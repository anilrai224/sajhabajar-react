import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import SingleProduct from '../productCard/SingleProduct';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'

const Caresoul = ({ product, type }) => {
  const [settings, setSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
            slidesToShow: 3,
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
    <div className='caresoul'>
      <span className='title'>{type === 'new' ? 'Recently Added to Our Store' : 'From Our Village'}</span>
      <div className="heading">
        <h1>{type === 'new' ? 'New Products' : 'Featured Products'}</h1> 
        <div className="line"></div>
      </div>
      <div className="products">
        <Slider {...settings} className='slider'>
          {product.map((data, index) => (
            <SingleProduct data={data} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Caresoul;
