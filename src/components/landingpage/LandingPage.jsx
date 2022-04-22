import Banner from "./Banner";
import Features from "./Features";
import WhyEventRite from "./WhyEventRtie";

const LandingPage = () => {
  document.title = "Eventrites | Landing Page";

  return (
    <>
      <Banner />
      <WhyEventRite />
      <Features />
    </>
  );
};

export default LandingPage;
