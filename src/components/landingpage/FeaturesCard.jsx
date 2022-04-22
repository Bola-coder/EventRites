import React from "react";
import globStyle from "./../../css/utilities/style.module.css";
import style from "./../../css/landingpage/features.module.css";

const FeaturesCard = ({ features }) => {
  return (
    <>
      <div className={style.features}>
        {features.map((feature, index) => (
          <div key={index}>
            <div className={`${globStyle.flex} ${style.feature}`}>
              <h4 className={`${index % 2 !== 0 ? style.reverse : ""}`}>
                {feature.text}
              </h4>
              <img src={feature.image} alt=""  className={`${index % 2 !== 0 ? style.reverseImg : ""}`}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesCard;
