import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    IncrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          incrementCount={this.IncrementCount}
          {...this.props}
          // to ensure all other props of original component is also available too use
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
