import { createContext, useContext } from "react";

const foo = createContext();
const bar = () => useContext(foo);
function AuthProvider() {
  return <div></div>;
}

export default AuthProvider;
