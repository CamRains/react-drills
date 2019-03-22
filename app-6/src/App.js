import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  // add props???
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };
    this.handleAddtask = this.handleAddtask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddtask() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element} />;
    });

    return (
      <div className="App">
        <h1>My To-do list:</h1>
        <div>
          <input
            value={this.state.input}
            placeholder="Enter New Task"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.handleAddtask}>Add</button>
        </div>

        <br />

        {list}
      </div>
    );
  }
}

export default App;
