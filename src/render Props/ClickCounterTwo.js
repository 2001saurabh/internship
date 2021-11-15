import React, { Component } from "react";

export class ClickCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <button onClick={incrementCount}>Clliced {count} times</button>;
  }
}

export default ClickCounterTwo;
