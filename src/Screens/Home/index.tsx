import { type FC } from "react";
import Hero from "./Sections/Hero";
import Services from "./Sections/Services";
import Steps from "./Sections/Steps";
import Webinar from "./Sections/Webinar";
import Testimonials from "./Sections/Testimonials";
import Updates from "./Sections/Updates";
import Footer from "./Sections/Footer";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Steps />
      <Webinar />
      <Testimonials />
      <Updates />
      <Footer />
    </div>
  );
};

export default Home;
