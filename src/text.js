import React, { Component } from "react";

export default class Text extends Component {
  constructor(props) {
    super();

    this.state = {
      text: "Thank you for subscribing",
    };
  }
  textManupulater() {
    // to change text call the setState() method which takes object (updated state)
    this.setState(
      //     {
      //   text: "Thank you for subscribing",
      // }
      (prevState) => ({
        text: "Welcome to team " + prevState.text,
      })
    );
  }

  render() {
    const { name, exp } = this.props;
    return (
      <div>
        <h1>
          hello {name} it is quit empresive you have {exp} years of experience.{" "}
        </h1>
        <h3>{this.state.text}</h3>

        <button onClick={() => this.textManupulater()}>subscribe</button>
      </div>
    );
  }
}
