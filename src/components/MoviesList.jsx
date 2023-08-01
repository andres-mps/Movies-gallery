import MovieCard from "./MovieCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { useState, useEffect } from "react";

function MoviesList({ filterValue }) {
  // const filteredMovies = movies.filter((movie) => movie.vote_average > filterValue);
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  console.log(filterValue);

  useEffect(() => {
    const getMoviesData = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/discover/movie`,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          include_adult: false,
          language: "en-US",
          original_language: "en",
          "vote_average.gte": filterValue,
          page: 1,
        },
      });

      setMoviesData([...response.data.results]);
    };
    getMoviesData();
  }, [filterValue]);

  useEffect(() => {
    const getMoviesData = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/discover/movie`,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          include_adult: false,
          language: "en-US",
          original_language: "en",
          "vote_average.gte": filterValue,
          page: page,
        },
      });

      setMoviesData((prevState) => [...prevState, ...response.data.results]);
    };
    page > 1 && getMoviesData();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={moviesData.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <div className="container-fuid mx-3 ">
        <div className="row">
          {moviesData.length === 0
            ? "Loading..."
            : moviesData.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </InfiniteScroll>
  );
}

export default MoviesList;
