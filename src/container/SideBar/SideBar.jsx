import { NavLink } from "react-router-dom";
import { useContext } from "react";

import styles from "./SideBar.module.scss";
import FavouritesContext from "../../store/FavouritesContext";

const SideBar = () => {
  const favCtx = useContext(FavouritesContext);
  const numberOfFavouriteMovies = favCtx.movies.length;

  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li key="contacts" className={styles.item}>
            <NavLink to={`movies`}>Movies</NavLink>
          </li>
          <li key="page2" className={styles.item}>
            <NavLink to={`favourites`}>Favourites - {numberOfFavouriteMovies}</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
