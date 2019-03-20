// gott have this this first line is where we will always start
import React, { Component } from "react";
// below is the spinning deal on the startup dont need it though
import logo from "./logo.svg";
// below is the styling import that we need to give colors and such: in this instance all it will really do is align the text at the top centerr
import "./App.css";

class App extends Component {
  // below is like the body that starts to let us add stuf?
  constructor() {
    // i still dont know what the hell the super does though
    super();
    // defines state--- can pass in whatever you want henc the flurbo; for accuracy though it should be message. long as its consitent through the rest of the doc tho you good fam
    this.state = {
      message: ""
    };
  }
  //  below is jsut a function that sets the state. we can call it whatever as well as like the message
  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div className="App">
        {/* e.target.value is telling this to return a function that looks in the right state?  */}
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {/* below is th ep tag that allows react to print out what we type bellow it such as an automatic mirroring. the"message" part or whatever else we pass in must match from the property portion of the set state. */}
        <p>{this.state.message} </p>
      </div>
    );
  }
}

export default App;
