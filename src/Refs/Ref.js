import React, { Component } from "react";

class Ref extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  clickHandler = () => {
    // alert(this.inputRef.current.value);
  };
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default Ref;
