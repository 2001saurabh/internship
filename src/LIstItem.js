import React from "react";

function LIstItem({ persons }) {
  return (
    <div>
      <h1>
        "I am {persons.name}. I am {persons.Age} years old and todays my
        caloriesIntake is {persons.caloriesIntake}"
      </h1>
    </div>
  );
}

export default LIstItem;
