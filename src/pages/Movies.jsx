import Movie from "../container/Movie/movie";

const movieList = [
  { id: "1", title: "Movie1", url: "movie.jpg" },
  { id: "2", title: "Movie2", url: "movie.jpg" },
  { id: "3", title: "Movie3", url: "movie.jpg" },
];

const Movies = () => {
  return (
    <>
      {movieList.map((movie) => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </>
  );
};

export default Movies;
