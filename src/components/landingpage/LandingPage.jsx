import Banner from "./Banner";
import Features from "./Features";
import Testimonials from "./Testimonials";
import WhyEventRite from "./WhyEventRtie";
import Pricing from "./Pricing";

const LandingPage = () => {
  document.title = "Eventrites | Landing Page";

  return (
    <>
      <Banner />
      <WhyEventRite />
      <Features />
      <Pricing />
      <Testimonials />
    </>
  );
};

export default LandingPage;
