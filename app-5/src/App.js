import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          myImage={
            "https://thesomathread.files.wordpress.com/2013/12/universe-over-wall.jpg"
          }
        />
      </div>
    );
  }
}

export default App;
