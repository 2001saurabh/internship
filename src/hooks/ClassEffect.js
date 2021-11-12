import React, { Component } from "react";

export class ClassEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
      x: 0,
      y: 0,
    };
  }

  logMouse = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    document.title = `you clicked ${this.state.count} times`;
    window.addEventListener("mousemove", this.logMouse);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("count updated");
      document.title = `you clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        <span>
          x: {this.state.x} y: {this.state.y}
        </span>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          className="ui blue inverted button"
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click {this.state.count} {this.state.name}
        </button>
      </div>
    );
  }
}

export default ClassEffect;
