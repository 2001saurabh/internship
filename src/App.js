// import "./App.css";

import ComponentC from "./context/ComponentC";
import { UserProvider } from "./context/useContext";

// for higher order
// import HoverCounter from "./higherOrder/HoverCounter";
// import ClickCounter from "./higherOrder/counter";

// for render props
// import Counter from "./render Props/counter";
// import ClickCounterTwo from "./render Props/ClickCounterTwo";
// import HoverCounterTwo from "./render Props/HoverCounterTwo";
//for hooks
// import HookCounter from "./hooks/classCounter";
// import ClassEffect from "./hooks/ClassEffect";
// import Effect from "./hooks/Effect";
// import ToggleDisplayEffect from "./hooks/ToggleDisplayEffect";

//for lifecycle
// import Lifecycle from "./lifecycle/Lifecycle";

//for parent component
// import ParentComponent from "./pureComponent/ParentComponent";

//for ref
// import Home from "./Home";
// import Focus from "./Refs/Focus";
// import Ref from "./Refs/Ref";

// import List from "./List";
// import Login from "./login";

// import StateObject from "./hooks/stateObject";

// import Click from "./click";
// import Form from "./form";
// import Greet from "./greets";
// import Parent from "./parent";
// import Text from "./text";

function App() {
  return (
    <div className="App">
      {/* <Greet name="saurabh" age="19" /> */}
      {/* <Greet name="deepesh" age="42" />
      <Greet name="rakhi" age="28" /> */}
      {/* <Form /> */}
      {/* <Text name={"subhas"} exp={20} />
      <Click /> */}
      {/* <Parent /> */}
      {/* ---------------for Hooks --------------------*/}
      {/* <HookCounter /> */}
      {/* <Lifecycle /> */}
      {/* <StateObject /> */}
      {/* <ClassEffect />
      <Effect />
      <ToggleDisplayEffect /> */}
      {/* -----------------------------------*/}
      {/* <List /> */}
      {/* <Login /> */}
      {/* <ParentComponent /> */}
      {/* <Focus /> */}
      {/* <Ref /> */}
      {/* <Home /> */}
      {/* ---------------for Higher order --------------------*/}
      {/* <HoverCounter />
      <ClickCounter /> */}

      {/* ---------------for render prop --------------------*/}
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}

      {/* ---------------for context --------------------*/}
      <UserProvider value="saurabh">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
