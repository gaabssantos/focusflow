import Features from "../../containers/Features/features.container";
import Hero from "../../containers/Hero/hero.container";
import HowItWorks from "../../containers/HowItWorks/how-it-works.container";
import Signup from "../../containers/Signup/signup.container";
import Testimonials from "../../containers/Testimonials/testimonials.container";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Signup />
    </>
  );
};

export default Home;
