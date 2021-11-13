import React, { Component } from "react";
import LifecycleChild from "./LifecycleChild";

export class Lifecycle extends Component {
  //mounting cycleMethod
  constructor(props) {
    super(props);

    this.state = {
      name: "Saurabh",
    };
    console.log("constructor");
  }
  //update and mounting  cycleMethod
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedMethod");
    return null;
  }
  //update cycleMethod
  componentDidMount() {
    console.log("didMount");
  }
  //update cycleMethod
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should update method");
    return true;
  }
  //update cycleMethod
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("information captured from dom");
    return null;
  }

  //update cycleMethod
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("all updated components rendered successfully");
  }
  //update and mounting  lifecycleMethod
  render() {
    console.log("render");
    return (
      <>
        hello
        <button onClick={() => this.setState({ name: "kiran" })}>
          chnage state {this.state.name}
        </button>
        <LifecycleChild />
      </>
    );
  }
}

export default Lifecycle;
