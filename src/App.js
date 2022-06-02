import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Footer from "./Footer/Footer";
import { Navbar } from "./Components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
