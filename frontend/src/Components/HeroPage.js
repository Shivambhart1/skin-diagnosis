import { React, useState } from "react";
import "./HeroPage.css";
import Form from "./Form";
import { BrowserRouter as Router, Switch, Mode, Link } from "react-router-dom";

const heroSection = {
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
        <h1>Get correct result of your Diagnosis</h1>
        <p>{heroSection.para}</p>
        <Link to="/diagnosis">
          <Button text="Get Started" />
        </Link>
      </section>
    </>
  );
};

const Button = ({ text }) => {
  return <button>{text}</button>;
};

export default HeroPage;
