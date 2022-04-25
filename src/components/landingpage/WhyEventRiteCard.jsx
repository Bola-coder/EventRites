import React from "react";
import style from "./../../css/landingpage/whyEventRite.module.css";
const WhyEventRiteCards = ({ details }) => {
  return (
    <>
      <div className={style.title}>
        <h2>Why Choose EventRites?</h2>
      </div>
      <div className={style.cards}>
        {details.map((ele, index) => (
          <div
            key={ele.id}
            className={`${style.card} ${
              index % 2 === 0 ? style.card_even : ""
            }`}>
            <h4>{ele.name}</h4>
            <p>{ele.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default WhyEventRiteCards;
