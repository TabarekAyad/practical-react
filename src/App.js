//import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./components/Counter";
import ImageSlider from "./components/ImageSlider";

function App() {
  // I need to define a state here inside this functional component
  // state = {
  //   visible: true,
  // };
  //const [visible, setVisibility] = useState(true);

  const buttonText = this.state.visible ? "Hide" : "Show";
  const Slider = this.state.visible ? <ImageSlider /> : null;

  //let Slider = this.state.visible ? <ImageSlider /> : null;
  // if (!this.state.visible) {
  //   Slider = <div>Hide everything from the user</div>;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {Slider}
        <button
          onClick={() => {
            //setVisibility({ visible: false });
            this.setState({ visible: !this.state.visible });
          }}
        >
          {buttonText}
        </button>
        <Counter initialCount={0}></Counter>
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
}

export default App;
