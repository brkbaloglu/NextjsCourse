"use client"

import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./ImageSlider.css"

export default function ClientRoutePage(){
    const settings = {
        dots: true
    }

    return (
        <div className="image-slider-container">
            <Slider {...settings}>
                <div>
                    <img src="http://picsum.photos/400/200" alt="" />
                </div>
                <div>
                    <img src="http://picsum.photos/400/200" alt="" />
                </div>
                <div>
                    <img src="http://picsum.photos/400/200" alt="" />
                </div>
                <div>
                    <img src="http://picsum.photos/400/200" alt="" />
                </div>
            </Slider>
        </div>

    )
}