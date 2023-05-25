import React from 'react'
import "./Slider.scss"
import { slider_img_1 } from "../../utils/images"

const Slider = () => {
  return (
    <div className='hero-slider'>
      <div className='hero-slider-item'>
        <img src={slider_img_1} alt="슬라이더 첫번째 이미지" />
      </div>
    </div>
  )
}

export default Slider