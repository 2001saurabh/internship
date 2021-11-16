import React, { useState } from "react";
import Effect from "./Effect";

function ToggleDisplayEffect() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toggle</button>
      {display && <Effect />}
    </div>
  );
}

export default ToggleDisplayEffect;
