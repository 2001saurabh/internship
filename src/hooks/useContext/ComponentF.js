import React from "react";
import { ChannelContext, UserContext } from "../../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(lastname) => {
                return (
                  <div>
                    user context value {user} lastname is {lastname}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
      <ComponentF />
    </div>
  );
}

export default ComponentF;
