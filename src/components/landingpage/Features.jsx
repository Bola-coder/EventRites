import React from "react";
import imageOne from "./../../images/landingpage/featureImageOne.png";
import imageTwo from "./../../images/landingpage/featureImageTwo.png";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const features = [
    {
      text: "Hosting events and getting people to sign up for your events has just gotten easier with Eventrites. Create your events on here and send the linkout to people to join your events. Eventrites makes scheduling events and making people sign up for your events easier and better in easy and simple steps",
      image: imageOne,
    },
    {
      text: "Joining events has never been easier. Eventrites make it easy to join events without stress and going hrough trouble. Search for events and you are one click away from joining the events in simple and easy steps",
      image: imageTwo,
    },
  ];
  return (
    <section>
      <FeaturesCard features={features} />
    </section>
  );
};

export default Features;
