import React from "react";
import LIstItem from "./LIstItem";
function List() {
  //   const list = ["vegetables", "fruits", "grains"];

  const person = [
    {
      name: "Saurabh Pathak",
      Age: 19,
      caloriesIntake: "250",
    },
    {
      name: "Rajiv Pathak",
      Age: 42,
      caloriesIntake: "400 ",
    },
    {
      name: "Rajesh Pathak",
      Age: 37,
      caloriesIntake: "150",
    },
    {
      name: "Geeta Pathak",
      Age: 28,
      caloriesIntake: "276",
    },
  ];
  //   const listItem = list.map((lists) => <h2>{lists}</h2>);
  const personsList = person.map((persons) => <LIstItem persons={persons} />);
  // here we pass the list items to a component which renders the jsx part named as LIstItem
  return (
    //   <div>{listItem}</div>;

    <div>{personsList}</div>
  );
}

export default List;
