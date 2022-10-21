import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyles";
import { SliderData } from "./data/SliderData";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </div>
  );
};

export default App;
