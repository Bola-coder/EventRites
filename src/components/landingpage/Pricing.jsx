import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  const pricing = [
    {
      plan: "Basic",
      description: "A basic free plan for $0 monthly.",
      perks: [
        "No payment needed",
        "Create a free event monthly",
        "Up to 50 attendees",
      ],
      btnText: "Get started for $0 monthly",
    },
    {
      plan: "Standard",
      description: "A standard plan for just $20 monthly.",
      perks: [
        "Mail Response integrated",
        "Create up to  3 events monthly",
        "Up to 200 Attendees",
      ],
      btnText: "Get started for $20 monthly",
    },
    {
      plan: "Premium",
      description: "A premium free plan for Enterprise.",
      perks: [
        "Integrated Attendance function",
        "Create Unlimited Events",
        "Unlimited Attendees",
      ],
      btnText: "Get started for $80 monthly",
    },
  ];
  return (
    <section style={{ padding: "20px" }}>
      <h2
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "30px",
          color: "var(--main)",
          letterSpacing: "2px",
          fontSize: "1.7em",
        }}>
        Pricing(Event Organizers)
      </h2>
      <PricingCard pricing={pricing} />
    </section>
  );
};

export default Pricing;
<section0></section0>;
