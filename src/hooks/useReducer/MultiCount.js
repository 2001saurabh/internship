import React, { useReducer } from "react";
import "semantic-ui-css/semantic.min.css";

// demo  of multiple counter working indipendently

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
function MultiCount() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  return (
    <div
      className="ui fluid container"
      style={{
        backgroundColor: "#f2f2f6",
        height: 500,
        width: 500,
        marginTop: 100,
        padding: 60,
      }}
    >
      <div className="ui header" style={{ marginBottom: 100 }}>
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

      <div className="ui header" style={{ paddingTop: 40, marginBottom: 100 }}>
        count: {countTwo}
      </div>
      <button
        className="ui inverted blue button"
        onClick={() => dispatchTwo("increment")}
      >
        Increment
      </button>
      <button
        className="ui inverted red button"
        onClick={() => dispatchTwo("decrement")}
      >
        Decrement
      </button>
      <button
        className="ui inverted yellow button"
        onClick={() => dispatchTwo("reset")}
      >
        Reset
      </button>
    </div>
  );
}

export default MultiCount;
