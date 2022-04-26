import React from "react";
import style from "./../../css/landingpage/pricing.module.css";

const PricingCard = ({ pricing }) => {
  return (
    <div className={style.pricings}>
      {pricing.map((price, index) => (
        <div key={index} className={style.pricing}>
          <h3 className={style.pricing__title}>{price.plan}</h3>
          <p>{price.description}</p>
          {price.perks.map((perk, index) => (
            <ul key={index}>
              <li>{perk}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PricingCard;
