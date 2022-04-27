import React from "react";
import style from "./../../css/landingpage/pricing.module.css";

const PricingCard = ({ pricing }) => {
  return (
    <div className={style.pricings}>
      {pricing.map((price, index) => (
        <div key={index} className={style.pricing}>
          <h3 className={style.pricing__title}>{price.plan}</h3>
          <p className={style.pricing__desc}>{price.description}</p>
          {price.perks.map((perk, index) => (
            <ul key={index} className={style.pricing__list}>
              <li>{perk}</li>
            </ul>
          ))}
          <button className={style.btn}>{price.btnText}</button>
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
