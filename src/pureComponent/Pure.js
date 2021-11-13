import React, { PureComponent } from "react";

export class Pure extends PureComponent {
  render() {
    console.log("pure");
    return (
      <>
        <h2> pure component {this.props.name}</h2>
      </>
    );
  }
}

export default Pure;
