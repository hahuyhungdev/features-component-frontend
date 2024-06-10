import './SliderCarousel.scss'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Main from '../../imgs/main.jpg'
import Main1 from '../../imgs/main1.jpg'

export const SliderCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <Slider {...settings}>
      <div>
        <img src={Main} alt='main' />
      </div>
      <div>
        <img src={Main1} alt='main' />
      </div>
    </Slider>
  )
}

export default SliderCarousel
