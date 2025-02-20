import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Program from "./Component/Programs/Program";
import Title from "./Component/Tltle/Title";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Testimonial from "./Component/Testimonials/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="section">
        <Hero />
      </section>

      <div className="container">
        {/* Programs Section */}
        <section id="program" className="section">
          <Title subtitle="Our PROGRAM" title="What We Offer" />
          <Program />
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <About />
        </section>

        {/* Campus Section */}
        <section id="campus" className="section">
          <Title subtitle="Gallery" title="Campus Photos" />
          <Campus />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section">
          <Title subtitle="TESTIMONIALS" title="What Student Says" />
          <Testimonial />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
