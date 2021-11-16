import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./useContext";

export default class ComponentE extends Component {
  render() {
    return (
      <div>
        {/*  this.context return context provider value or default value here  */}
        <div>Component E context {this.context}</div>

        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;
