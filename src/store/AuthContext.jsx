import react from "react";

const AuthContext = react.createContext({
  isLoggedIn: false,
  setIsLoggedIn: (value) => {}
});

export default AuthContext;
