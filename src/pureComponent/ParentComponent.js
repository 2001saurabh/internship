import React, { Component } from "react";
import FunctionalPure from "./FunctionalPure";
import Pure from "./Pure";
import Regular from "./Regular";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "saurabh",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "saurabh" });
    }, 2000);
  }
  render() {
    console.log("parent render");
    return (
      <div>
        parent regular component
        <Pure name={this.state.name} />
        <Regular />
        <FunctionalPure />
      </div>
    );
  }
}

export default ParentComponent;
