import React from "react";

function FunctionalPure() {
  console.log("memo");
  return <div>functional pure component using memo</div>;
}

export default React.memo(FunctionalPure);
