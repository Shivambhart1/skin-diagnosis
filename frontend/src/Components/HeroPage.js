import React from "react";
import "./HeroPage.css";
import { Link } from "react-router-dom";
// import heroimage from "heroimage.jpg";

const heroSection = {
  title: "Get correct result of your Diagnosis",
  para: "Your online destination for quick and user-friendly preliminary diagnosis. Click on the button below to get started with the diagnosis process.",
};

const HeroPage = () => {
  return (
    <section className="heroSection">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{heroSection.title}</h1>
          <p>{heroSection.para}</p>
          <Link to="/diagnosis">
            <Button text="Get Started" />
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src="heroimage.jpg" alt="Diagnosis illustration" />
      </div>
    </section>
  );
};

const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default HeroPage;
