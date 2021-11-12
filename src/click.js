// const Click = () => {
//   const handleClick = () => {
//     console.log("button clicked");
//   };
//   return (
//     <div>
//       <button onClick={() => handleClick()}> Press</button>
//     </div>
//   );
// };

// export default Click;

import React, { Component } from "react";

class Click extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ms: "hii",
    };
  }

  handlePress() {
    this.setState({ ms: "hello" });
  }

  handleClick = () => {
    this.setState({ ms: "chalo" });
  };
  render() {
    return (
      <div>
        <p>{this.state.ms}</p>
        <button onClick={() => this.handlePress()}>Press</button>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default Click;
