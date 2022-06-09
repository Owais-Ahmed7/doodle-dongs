import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Main from "./Main";
import About from "./About";
import Gallery from "./Gallery";
import Timeline from "./Timeline";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
  }, []);

  return (
    <div>
      <Main />
      <About />
      <Gallery />
      <Timeline />
      <Footer />
    </div>
  );
}

export default Home;
