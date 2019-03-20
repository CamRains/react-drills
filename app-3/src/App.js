import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filterString: "",
      colors: [
        "black",
        "white",
        "red",
        "green",
        "purple",
        "blue",
        "blurple",
        "beige",
        "blue"
      ]
    };
  }

  handleChange(col) {
    this.setState({ filterString: col });
  }
  render() {
    let colorsYouCanSee = this.state.colors
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}> {element}</h2>;
      });

    return (
      <div className="App">
        <input
          value={this.state.filterString}
          onChange={e => this.handleChange(e.target.value)}
          type="text"
        />
        {colorsYouCanSee}
      </div>
    );
  }
}

export default App;
