import React from "react";

function Form() {
  return (
    <div>
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input
              value=""
              type="text"
              name="shipping[first-name]"
              placeholder="First Name"
            />
          </div>
          <div class="field">
            <input
              type="text"
              name="shipping[last-name]"
              placeholder="Last Name"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
