import React from "react";
import "./App.css";
import "./style.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import PreviousWork from "./components/PreviousWork";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AboutMe />
      </div>
      <div className="container">
        <PreviousWork />
      </div>
      <Footer />
    </div>
  );
}

export default App;
