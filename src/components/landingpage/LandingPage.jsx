import Banner from "./Banner";
import Features from "./Features";
import Testimonials from "./Testimonials";
import WhyEventRite from "./WhyEventRtie";

const LandingPage = () => {
  document.title = "Eventrites | Landing Page";

  return (
    <>
      <Banner />
      <WhyEventRite />
      <Features />
      <Testimonials />
    </>
  );
};

export default LandingPage;
