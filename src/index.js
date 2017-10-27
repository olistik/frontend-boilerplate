import React from 'react';
import ReactDOM from 'react-dom';

let div = document.createElement("div")
div.id = "rootContainer"
document.body.appendChild(div)

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 0,
      active: true,
    }
  }

  clickHandler = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }))
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(this.props),
      100
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick(props) {
    if (this.state.active) {
      this.setState((prevState, props) => ({
        date: new Date(),
        counter: prevState.counter + parseInt(props.increment, 10)
      }))
    }
  }

  render() {
    return (
      <div className={`clocking-${this.props.increment}`}>
        <h1>Testing clock</h1>
        <p>Current time is {this.state.date.toLocaleTimeString()}</p>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.clickHandler}>Toggle active</button>
        <p>active: {this.state.active ? "active" : "NOT active"}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Clock increment="1"/>
      <Clock increment="2"/>
      <Clock increment="3"/>
    </div>
  );
}
ReactDOM.render(
  <App />,
  div
);
