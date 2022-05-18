import React from 'react';
import { useState } from 'react';
import NavBar from "./components/NavBar";
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Services from "./views/Services";
import Book from "./views/Book";
import About from "./views/About";
import Contact from "./views/Contact";

function App() {
  const [page, setPage] = useState('main')
  const Render = () => {
    switch(page){
      case 'main':
      return <Main />
      case 'services':
      return <Services />
      case 'about':
      return <About/>
      case 'book':
      return <Book />
      case 'contact':
      return <Contact />
    }
  }
  return (
    <div className="App">
        <div className="wrapper">
        <NavBar page={page} setPage={setPage}/>
        <Render />
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