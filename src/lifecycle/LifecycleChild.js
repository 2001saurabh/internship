import React, { Component } from "react";

export class LifecycleChild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saurabh",
    };
    console.log("constructor child");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedMethod child");
    return null;
  }

  componentDidMount() {
    console.log("didMount child");
  }

  //update cycleMethod
  shouldComponentUpdate(nextProps, nextState) {
    console.log("child component's should update method");
    return true;
  }
  //update cycleMethod
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("child component information captured from dom");
    return null;
  }

  //update cycleMethod
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      "child component's all updated components rendered successfully"
    );
  }
  render() {
    console.log("render child");
    return <div>hello child </div>;
  }
}

export default LifecycleChild;
