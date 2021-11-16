// import React, { Component } from "react";

// export class ClassCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       //
//       //     <div
//       //       className="ui center aligned container card"
//       //       style={{ height: "30vh" }}
//       //     >

//       //     </div>
//       //   </div>
//       <>
//         <div
//           className="ui fluid  container"
//           style={{ margin: "20%", width: "25%" }}
//         >
//           <div
//             class="ui   segment"
//             style={{ height: "30vh", backgroundColor: "#F05288" }}
//           >
//             <h3 style={{ color: "#fff" }}>your count is :{this.state.count}</h3>
//           </div>
//           <div class="ui  bottom attached buttons">
//             <button
//               className="ui blue bottom attached icon button"
//               onClick={this.increment}
//             >
//               <i className="plus square outline icon"></i>
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// using hooks

import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";

function HookCounter() {
  const initial = 0;
  const [count, setCount] = useState(initial);

  //   const increment = () => {
  //     const newCount = count + 1;
  //     setCount(newCount);

  //     setCount((count) => count + 1);
  //   };

  // const addfive = () => {
  //   for (var i = 0; i < 5; i++) {
  //     setCount((count) => count + 1);
  //   }
  // };
  return (
    <div>
      <div
        className="ui fluid  container"
        style={{ margin: "10%", width: "25%" }}
      >
        <h2 class="ui center aligned dividing header">Counter</h2>
        <div
          class="ui   segment"
          style={{ height: "30vh", backgroundColor: "#A693FF" }}
        >
          <h3 style={{ color: "#fff" }}>your count is {count}</h3>
        </div>
        <div class="ui  bottom attached buttons">
          <button
            className="ui green bottom attached icon button"
            onClick={() => setCount(count + 1)}
          >
            <i className="plus  icon"></i>
          </button>
          <button
            className="ui red bottom attached icon button"
            onClick={() => setCount(count - 1)}
          >
            <i className="minus icon"></i>
          </button>
          <button
            className="ui grey bottom attached icon button"
            onClick={() => setCount(initial)}
          >
            <i className="erase icon"></i>
          </button>
          {/* <p>count = {count}</p>
      <button onClick={() => setCount(initial)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* 
      <button onClick={increment}>Add </button> */}
          {/* <button onClick={() => setCount(count + 1)}>increment</button>
          <button onClick={addfive}>+ 5</button> */}
        </div>
      </div>
    </div>
  );
}

export default HookCounter;

// export default ClassCounter;
