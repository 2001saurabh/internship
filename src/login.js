import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();

    this.state = {
      isLogedIn: false,
      name: "",
      username: "",
      password: "",
    };
  }

  validate = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.username === "" ||
      this.state.password === ""
    ) {
      alert("All fields are mendatory");
    } else {
      this.setState({
        isLogedIn: !this.state.isLogedIn,

        password: "",
        username: "",
      });
    }
  };
  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    const { name, username, password } = this.state;
    return this.state.isLogedIn ? (
      <div
        className="ui segment"
        style={{
          marginTop: "5%",
        }}
      >
        <h2 style={{ color: "#000" }}>Welcome {this.state.name}</h2>
      </div>
    ) : (
      <div className=" ui fluid container" style={{ width: " 35%" }}>
        <h2 style={{ backgroundColor: "#F05288" }}>Welcome Guest</h2>
        <div
          className="ui left aligned segment"
          style={{ borderColor: "#A693FF", borderWidth: "4px" }}
        >
          <form className="ui form" onSubmit={this.validate}>
            <div className="field">
              <label> Name</label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                value={name}
                ref={this.inputRef}
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
              />
            </div>
            <div className="field">
              <label> Username</label>
              <input
                type="text"
                name="user-name"
                placeholder="UserName"
                value={username}
                onChange={(e) => {
                  this.setState({ username: e.target.value });
                }}
              />
            </div>
            <div className="field">
              <label> Password</label>
              <input
                type="password"
                name="first-name"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <button className="ui blue inverted button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  //   render() {
  //     if (this.state.isLogedIn === true) {
  //       return (
  //         <div
  //           className="ui fluid inverted container"
  //           style={{
  //             backgroundColor: "#F05288",
  //             margin: "5%",
  //           }}
  //         >
  //           <h2>Welcome {this.state.name}</h2>
  //         </div>
  //       );
  //     } else {
  //       return (
  //         <div className=" ui fluid container" style={{ width: " 35%" }}>
  //           <h2 style={{ backgroundColor: "#F05288" }}>Welcome Guest</h2>
  //           <div
  //             className="ui left aligned segment"
  //             style={{ borderColor: "#f88233", borderWidth: "4px" }}
  //           >
  //             <form class="ui form" onSubmit={this.validate}>
  //               <div class="field">
  //                 <label> Name</label>
  //                 <input
  //                   type="text"
  //                   name="first-name"
  //                   placeholder="First Name"
  //                   value={this.state.name}
  //                   onChange={(e) => {
  //                     this.setState({ name: e.target.value });
  //                   }}
  //                 />
  //               </div>
  //               <div class="field">
  //                 <label> Username</label>
  //                 <input
  //                   type="text"
  //                   name="user-name"
  //                   placeholder="UserName"
  //                   value={this.state.username}
  //                   onChange={(e) => {
  //                     this.setState({ username: e.target.value });
  //                   }}
  //                 />
  //               </div>
  //               <div class="field">
  //                 <label> Password</label>
  //                 <input
  //                   type="password"
  //                   name="first-name"
  //                   placeholder="Password"
  //                   value={this.state.password}
  //                   onChange={(e) => {
  //                     this.setState({ password: e.target.value });
  //                   }}
  //                 />
  //               </div>
  //               <button class="ui blue inverted button">Submit</button>
  //             </form>
  //           </div>
  //         </div>
  //       );
  //     }
  //   }
}

// export default Login;
