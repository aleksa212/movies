import { useContext } from "react";
import Movie from "../container/Movie/movie";

import FavouritesContext from "../store/FavouritesContext";

const Favourites = () => {
  const favCtx = useContext(FavouritesContext);

  return (
    <>
      {favCtx.movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
      ;
    </>
  );
};

export default Favourites;
