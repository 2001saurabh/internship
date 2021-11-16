import React, { Component } from "react";
import UpdatedComponent from "./CommonFuncHigherOrder";

class ClickCounter extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       count: 0,
  //     };
  //   }
  //   IncrementCount = () => {
  //     this.setState((prevState) => {
  //       return { count: prevState.count + 1 };
  //     });
  //   };
  render() {
    // const { count, Counter } = this.props;
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>HOC demo: clicked {count} times</button>
    );
  }
}

export default UpdatedComponent(ClickCounter);
