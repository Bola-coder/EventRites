import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// Custom Css
import "./../../css/landingpage/swiper.css";
import TestimonialCards from "./TestimonialCards";
import style from "./../../css/landingpage/testimonial.module.css";
import faceImage from "./../../images/landingpage/faceImage2.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      index: 0,
      name: "Ronald Araujo",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum providentnda sint placeat impedit laboriosam asperiores. Velit nihil a, iure rerum dicta maxime facere?",
      image: faceImage,
    },
    {
      index: 1,
      name: "Eric Gracia",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum providentnda sint placeat impedit laboriosam asperiores. Velit nihil a, iure rerum dicta maxime facere?",
      image: faceImage,
    },
    {
      index: 2,
      name: "Dani Alves",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum providentnda sint placeat impedit laboriosam asperiores. Velit nihil a, iure rerum dicta maxime facere?",
      image: faceImage,
    },
    {
      index: 3,
      name: "Gerald Pique",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum providentnda sint placeat impedit laboriosam asperiores. Velit nihil a, iure rerum dicta maxime facere?",
      image: faceImage,
    },
    {
      index: 4,
      name: "Sergio Busquet",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum providentnda sint placeat impedit laboriosam asperiores. Velit nihil a, iure rerum dicta maxime facere?",
      image: faceImage,
    },
    {
      index: 5,
      name: "Sergi Roberto",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum providentnda sint placeat impedit laboriosam asperiores. Velit nihil a, iure rerum dicta maxime facere?",
      image: faceImage,
    },
    {
      index: 6,
      name: "Riqui Puig",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsum providentnda sint placeat impedit laboriosam asperiores. Velit nihil a, iure rerum dicta maxime facere?",
      image: faceImage,
    },
  ];

  return (
    <section style={{ marginTop: "50px" }}>
      <div className={style.title} style={{ marginBottom: "30px" }}>
        <h2>Testimonials</h2>
      </div>

      {/* Swiper styles */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          // Responsiveness
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="swiper">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.index}>
            <TestimonialCards
              testimonial={testimonial}
              className="swiper-slide"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
