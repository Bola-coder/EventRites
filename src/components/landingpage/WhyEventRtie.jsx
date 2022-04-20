import React from "react";
import WhyEventRiteCards from "./WhyEventRiteCard";

const WhyEventRite = () => {
  const cardDetails = [
    {
      id: 0,
      name: "Easy to Use",
      content:
        "Creating and Joining Events on EventRites is very easy as eveything is done intuitively with no stress whatsoever\n\nCreating and Joining Events on EventRites is very easy as eveything is done intuitively with no stress whatsoever",
    },
    {
      id: 1,
      name: "Easy to Use",
      content:
        "Creating and Joining Events on EventRites is very easy as eveything is done intuitively with no stress whatsoever\n\nCreating and Joining Events on EventRites is very easy as eveything is done intuitively with no stress whatsoever",
    },
    {
      id: 2,
      name: "Easy to Use",
      content:
        "Creating and Joining Events on EventRites is very easy as eveything is done intuitively with no stress whatsoever\nCreating and Joining Events on EventRites is very easy as eveything is done intuitively with no stress whatsoever",
    },
  ];
  return (
    <section>
      <WhyEventRiteCards details={cardDetails} />
    </section>
  );
};

export default WhyEventRite;
