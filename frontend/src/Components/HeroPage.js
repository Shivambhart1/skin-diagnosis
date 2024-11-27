import { React, useState } from "react";
import "./HeroPage.css";
import Form from "./Form";
import { BrowserRouter as Router, Switch, Mode, Link } from "react-router-dom";
import images from "../images/images.jpeg";

const heroSection = {
  title: "Get correct result of your Diagnosis",
  para: "Your online destination for quick and user-friendly preliminary diagnosis. Click on the button below to get started with the diagnosis process.",
};

const HeroPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <section className="heroSection">
        <div className="left">
          <h1>{heroSection.title}</h1>
          <p>{heroSection.para}</p>
          <Link to="/diagnosis">
            <Button text="Get Started" />
          </Link>
        </div>
      </section>
    </>
  );
};

const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default HeroPage;
