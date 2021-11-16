import React, { Component } from "react";
import UpdatedComponent from "./CommonFuncHigherOrder";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>Hoc demo: Hovered {count} times</h2>
    );
  }
}

export default UpdatedComponent(HoverCounter);
