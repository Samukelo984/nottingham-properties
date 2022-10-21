import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import InfoSection from "./components/infosection/InfoSection";
import { SliderData } from "./data/SliderData";
import { InfoData } from "./data/InfoData";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
    </div>
  );
};

export default App;
