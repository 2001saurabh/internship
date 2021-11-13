import React, { Component } from "react";
import Login from "./login";

class Home extends Component {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
  }
  handleClick = () => {
    this.loginRef.current.focusInput();
  };
  render() {
    return (
      <>
        <div className="ui menu" style={{ backgroundColor: "inherit" }}>
          <div className="right item">
            <div className="ui blue button" onClick={this.handleClick}>
              Sign-Up
            </div>
          </div>
        </div>
        <Login ref={this.loginRef} />
      </>
    );
  }
}

export default Home;
