import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/HeroPage";
import DetectionPage from "./Components/DetectionPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SkinCare from "./Components/SkinCare";

const App = () => {
  return (
    <>
      <Router>
        <div className="mainHero">
          <section className="hero">
            <Navbar />
            <Routes>
              <Route path="/diagnosis" Component={DetectionPage} />
            </Routes>
            <Routes>
              <Route path="/" Component={HeroPage} />
            </Routes>
            <Routes>
              <Route path="/skin-care" Component={SkinCare} />
            </Routes>
          </section>
        </div>
      </Router>
    </>
  );
};

export default App;
