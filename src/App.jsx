// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    // <-- add basename="/Portfolio/"
    <Router basename="/Nilam_Portfolio/">
      <NavBar />
      <div className="content" >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
