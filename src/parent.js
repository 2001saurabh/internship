import React, { Component } from "react";
import Child from "./child";

export class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Parent",
    };
  }
  greetParent = (childName) => {
    alert(`Hello ${this.state.name} from ${childName}`);
  };

  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default Parent;
