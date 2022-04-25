import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
import style from "./../../css/landingpage/testimonial.module.css";

const TestimonialCards = ({ testimonial }) => {
  return (
    <div className={style.testimonial}>
      <div className={style.name}>
        <img src={testimonial.image} alt="" />
        <h5>{testimonial.name}</h5>
      </div>
      <div className={style.comment}>
        <p>{testimonial.comment}</p>
      </div>
    </div>
  );
};

export default TestimonialCards;
