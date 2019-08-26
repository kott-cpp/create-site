import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
/*
import Page2 from "page2.js"
import logo from './logo.svg';
import './App.css';
import styles from './button.module.css';
 */

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* function App() {
  return (
    <div className="App">
      <header className={styles.button}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */
