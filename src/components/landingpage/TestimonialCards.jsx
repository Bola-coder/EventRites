import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import style from "./../../css/landingpage/testimonial.module.css";

const TestimonialCards = ({ testimonials }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper">
      {/* End of Swiper Opening tag */}
      {/* <div className={style.testimonials}> */}
      {testimonials.map((testimony) => (
        <SwiperSlide key={testimony.index}>
          <div className={style.testimonial}>
            <div className={style.name}>
              <img src={testimony.image} alt="" />
              <h5>{testimony.name}</h5>
            </div>
            <div className={style.comment}>
              <p>{testimony.comment}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* </div> */}
    </Swiper>
  );
};

export default TestimonialCards;
