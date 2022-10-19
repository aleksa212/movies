import React from "react";

const FavouritesContext = React.createContext({
  movies: [],
  addMovie: (movie) => {},
  removeMovie: (id) => {},
  isAdded: (id) => {},
});

export default FavouritesContext;
