import FavouritesContext from "./FavouritesContext";
import { useState } from "react";

const FavouritesProvider = (props) => {
  const [movies, setMovies] = useState([]);

  const isAddedHandler = (id) => {
    return !!movies.find(movie => movie.id === id);
  }

  const addMovieHandler = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovieHandler = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  const favourties = {
    movies: movies,
    addMovie: addMovieHandler,
    removeMovie: removeMovieHandler,
    isAdded: isAddedHandler,
  };

  return (
    <FavouritesContext.Provider value={favourties}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
