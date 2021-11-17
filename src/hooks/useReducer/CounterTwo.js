import React, { useReducer } from "react";
import "semantic-ui-css/semantic.min.css";

//complex example of useReducer hook

// it is usefull when we required to update state by certain value not on a fixed one.
const initialState = {
  firstCount: 0,
  SecondCount: 2,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };

    // As here we have 2 type of action to perform on deferent state we have to modify our count value accordingly
    // so to do that we spread the state
    case "increment2":
      return { ...state, SecondCount: state.SecondCount + action.value };
    case "decrement2":
      return { ...state, SecondCount: state.SecondCount - action.value };

    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div
      className="ui fluid container"
      style={{
        backgroundColor: "#f2f2f6",
        height: 300,
        width: 500,
        marginTop: 100,
        padding: 60,
      }}
    >
      <div className="ui header" style={{ marginBottom: 60 }}>
        count: {count.firstCount}
      </div>
      <button
        className="ui inverted blue button"
        onClick={() => dispatch({ type: "increment", value: 5 })}
      >
        Increment + 5
      </button>
      <button
        className="ui inverted red button"
        onClick={() => dispatch({ type: "decrement", value: 5 })}
      >
        Decrement - 5
      </button>
      <div className="ui header" style={{ marginBottom: 60 }}>
        Second count: {count.SecondCount}
      </div>
      <button
        className="ui inverted blue button"
        onClick={() => dispatch({ type: "increment2", value: 2 })}
      >
        Increment + 2
      </button>
      <button
        className="ui inverted red button"
        onClick={() => dispatch({ type: "decrement2", value: 2 })}
      >
        Decrement - 2
      </button>
      <button
        className="ui inverted yellow button"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
