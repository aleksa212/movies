import { Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";

import "./App.scss";

import SideBar from "../container/SideBar/SideBar";
import Header from "../container/Header/Header";
import FavouritesProvider from "../store/FavouritesProvider";
import Login from "../container/Login/Login";
import AuthContext from "../store/AuthContext";

const App = () => {
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isLoggedIn");

    if (userLoggedIn) {
      ctx.setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "true");
    ctx.setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    ctx.setIsLoggedIn(false);
  };

  return (
    <>
      <Header onLogout={logoutHandler} />
      {!ctx.isLoggedIn && <Login onLogin={loginHandler} />}
      {ctx.isLoggedIn && (
        <main>
          <FavouritesProvider>
            <div id="container">
              <SideBar />
              <div id="content">
                <Outlet />
              </div>
            </div>
          </FavouritesProvider>
        </main>
      )}
    </>
  );
};

export default App;
