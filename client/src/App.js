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
import CreateAccount from "./views/CreateAccount";
import Profile from "./views/Profile";

import Login from './views/Login'

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache

} from '@apollo/client'

import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql'
})

const authLink = setContext(( _, { headers } ) => {
  const token = localStorage.getItem('auth_token')
  return {
    ...headers,
    authorization: token ? `Bearer ${token}` : ''
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})



function App() {
  const [page, setPage] = useState('main')
  const Render = () => {
    switch(page){
      case 'main':
      return <Main page={page} setPage={setPage} />
      case 'services':
      return <Services />
      case 'about':
      return <About/>
      case 'book':
      return <Book />
      case 'contact':
      return <Contact />
      case 'createAccount':
      return <CreateAccount />
      case 'logIn':
      return <Login />
      case 'profile':
      return <Profile />
    }
  }
  return (
    <div className="App">
      <ApolloProvider client={client} >
        <div className="wrapper">
            <NavBar page={page} setPage={setPage}/>
            <Render />
          </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
            // <Main />
            // <Services />
            // <About />
            // <Book />
            // <Contact />