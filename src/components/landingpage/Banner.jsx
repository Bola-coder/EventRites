import React from "react";
import BannerImage from "./../../images/landingpage/EventriteBanner.png";
import globStyle from "./../../css/utilities/style.module.css";
import style from "./../../css/landingpage/banner.module.css";

const Banner = () => {
  return (
    <>
      <section className={`${globStyle.flex} ${style.main}`}>
        <div className={style.content}>
          <h1 className={style.heading}>
            Create and Join Events without stress.{" "}
          </h1>
          <p className={style.texts}>
            A one stop place to create, organize and join events, without having
            to worry about stress and logic{" "}
          </p>
          <div className={style.cta}>
            <button className={globStyle.button}>Create an Event</button>
            <button className={globStyle.button}>Join an Event</button>
          </div>
        </div>
        <div className={style.banner_image}>
          <img src={BannerImage} alt="Banner" className={style.img} />
        </div>
      </section>
    </>
  );
};

export default Banner;
