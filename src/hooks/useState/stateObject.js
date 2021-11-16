import React, { useState } from "react";

function StateObject() {
  //   const [name, setName] = useState({ firstName: "", lastName: "" });
  const [item, setItem] = useState([]);

  const addItem = () => {
    setItem([
      ...item,
      { id: item.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };
  return (
    // <div>
    //   <form>
    //     <input
    //       type="text"
    //       value={name.firstName}
    //       onChange={(e) => setName({ ...name, firstName: e.target.value })}
    //     />
    //     <input
    //       type="text"
    //       value={name.lastName}
    //       onChange={(e) => setName({ ...name, lastName: e.target.value })}
    //     />
    //     <h2>your firstname is = {name.firstName} </h2>
    //     <h2>lastname is = {name.lastName}</h2>

    //     {/* <h3>{JSON.stringify(name)}</h3> */}
    //   </form>
    // </div>
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

export default StateObject;
