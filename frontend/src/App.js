import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import DescriptionContent from "./Components/DescriptionContent";
import HeroPage from "./Components/HeroPage";
import DetectionPage from "./Components/DetectionPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [toggle, setToggle] = useState(false);
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
          </section>
        </div>
      </Router>
    </>
  );
};

export default App;
