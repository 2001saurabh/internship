import React, { useReducer } from "react";
import "semantic-ui-css/semantic.min.css";

//Simple demo of useReducer
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      className="ui fluid container"
      style={{
        backgroundColor: "#f2f2f6",
        height: 300,
        width: 500,
        marginTop: 100,
      }}
    >
      <div className="ui header" style={{ marginTop: 100 }}>
        count: {count}
      </div>
      <button
        className="ui inverted blue button"
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button
        className="ui inverted red button"
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
      <button
        className="ui inverted yellow button"
        onClick={() => dispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterOne;
