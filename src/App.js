//import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
