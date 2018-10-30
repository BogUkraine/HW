import React, { Component } from "react";
import ReactDOM from "react-dom";

// props = {
//     name: 'John',
// a: 1,
// b: 3
// }

const Root = ({ name, age, children }) => (
  <div>
    <h1>Hello, {name}</h1>
    <div>Another text</div>
    <div>{age}</div>
    <div>{children}</div>
  </div>
);

// let state = {
//     turnedOn: false,
//       another: 777
// }

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnedOn: false,
      another: 777
    };
    // this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState({ turnedOn: !this.state.turnedOn });
    // this.state.turnedOn = !this.state.turnedOn;
    // state = { turnedOn: state.turnedOn };
  };

  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        {this.state.turnedOn ? "On" : "Off"}
        <button onClick={this.toggle}>click me</button>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <ToggleButton name="John" age={17}>
      Dou
    </ToggleButton>
    <ToggleButton name="John" age={17}>
      Dou
    </ToggleButton>
  </div>,
  document.getElementById("root")
);
console.log(document.getElementById("root"));