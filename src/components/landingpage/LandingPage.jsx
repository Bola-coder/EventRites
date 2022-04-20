import Banner from "./Banner";
import WhyEventRite from "./WhyEventRtie";

const LandingPage = () => {
  document.title = "Eventrites | Landing Page";

  return (
    <>
      <Banner />
      <WhyEventRite />
    </>
  );
};

export default LandingPage;
