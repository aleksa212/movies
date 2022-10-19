import { Outlet } from "react-router-dom";

import "./App.scss";

import SideBar from "../container/SideBar/SideBar";
import Header from "../container/Header/Header";
import FavouritesProvider from "../store/FavouritesProvider";

const App = () => {
  return (
    <>
      <Header />
      <FavouritesProvider>
        <div id="container">
          <SideBar />
          <div id="content">
            <Outlet />
          </div>
        </div>
      </FavouritesProvider>
    </>
  );
};

export default App;
