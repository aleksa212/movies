import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const setIsLoggedInHandler = (value) => {
    setIsLoggedIn(value);
  };

  const auth = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedInHandler
  };

  return (
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
