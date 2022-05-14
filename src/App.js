import React from 'react';
// import NavBar from "./components/NavBar";
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Services from "./views/Services";
import Book from "./views/Book";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  return (
      <div className="App">
          <div className="wrapper">
            {/* <NavBar /> */}
            <Main />
            <Services />
            <About />
            <Book />
            <Contact />
          </div>
      </div>
  );
}

export default App;

            // <Main />
            // <Services />
            // <About />
            // <Book />
            // <Contact />