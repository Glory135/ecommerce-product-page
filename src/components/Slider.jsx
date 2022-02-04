import React, { useContext } from "react";
import { Context } from "../App";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";
import "../styles.css";

function ImgSlider() {
  const { setOpenLight } = useContext(Context);
  const thumbs = [thumb1, thumb2, thumb3, thumb4];
  const imgs = [img1, img2, img3, img4];
  return (
    <div className='slider'>
      <Slider
        autoplay
        autoplaySpeed={5000}
        dots
        customPaging={(i) => {
          return (
            <div>
              <div className='cover'></div>
              <img className='indicator-imgs' src={thumbs[i]} alt='' />
            </div>
          );
        }}
        dotsClass='slick-dots custom-dots'
      >
        {imgs.map((item) => {
          return (
            <div key={item}>
              <img
                onClick={() => {
                  setOpenLight(true);
                }}
                src={item}
                className='slider_img'
                alt=''
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImgSlider;
