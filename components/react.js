import React, { Component } from "react";
import ReactDOM from "react-dom";

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

const MyName = (props) => (<div>
  <span>{props.firstName}</span>
  <span>{props.lastName}</span>
  <span>{props.age + 3}</span>
</div>)

const RedText = (props) => (<div style={{color: 'red'}}>{props.children}</div>)

const Root = () => (
  <div>
      <h1>Hello, world!{new Date().getDate()}</h1> 
      <MyName firstName="John1" lastName="Michael" age={18}/> 
      <RedText><h2>Test </h2></RedText>

  </div>
);

ReactDOM.render(<Root/> ,document.getElementById('root')
);