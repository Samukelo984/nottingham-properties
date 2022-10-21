import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./GlobalStyles";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
    </div>
  );
};

export default App;
