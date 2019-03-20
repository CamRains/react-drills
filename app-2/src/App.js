import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["meats", "cheeses", "ice creams", "flurbos", "gorgon sh*t"]
    };
  }
  render() {
    let listOnScreen = this.state.list.map((element, index) => {
      return <h1 key={index}> {element} </h1>;
    });

    return <div className="App">{listOnScreen} </div>;
  }
}

export default App;
