import React from "react";

const UserContext = React.createContext("default value");
// we can also add a default value to userContext so that if there is no provider then
// default value can be access to render jsx

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
