// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import About from "../components/about/About";
import Education from "../components/education/Education";
import Portfolio from "../components/portfolio/Portfolio";
import Footer from "../components/footer/Footer";

function Homepage() {
  return (
    <div className="HomePage">
      <Navbar />
      <Banner />
      <About />
      <Education />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Homepage;
