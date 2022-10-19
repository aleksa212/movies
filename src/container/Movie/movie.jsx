import { useContext } from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import FavouriteContext from "../../store/FavouritesContext";

import styles from "./movie.module.scss";

const Movie = (props) => {
  const favCtx = useContext(FavouriteContext);

  const favouritesToggle = (movie) => {
    if (favCtx.isAdded(movie.id)) {
      favCtx.removeMovie(movie.id);
    } else {
      favCtx.addMovie(movie);
    }
  };

  return (
    <>
      <Card>
        <div className={styles["movie-container"]}>
          <div className={styles["img-container"]}>
            <img
              className={styles.img}
              src={`/images/${props.movie.url}`}
              alt="movie poster"
            />
          </div>
          <h3 className={styles.title}>{props.movie.title}</h3>
          <div className={styles.buttons}>
            <div>*****</div>
            <Button onClick={() => favouritesToggle(props.movie)}>
              Toggle Fav
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Movie;
