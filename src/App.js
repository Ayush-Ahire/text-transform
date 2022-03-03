import Navbar from "./components/Navbar.js";
import Textbox from "./components/Textbox.js";
// import About from "./components/About.js";

// import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#282C35";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>

      <Navbar mode={mode} togglemode={togglemode} />
      <br />
      <br />
      <Textbox heading="Enter text to analyze" mode={mode} />
     
    </>
  );
}

export default App;
