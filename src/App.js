import React from "react";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './styles/index.css';
import { BrowserRouter, Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Home />
        <Work />
        <Skills />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
