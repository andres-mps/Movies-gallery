import MovieCard from "./MovieCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

import { useState, useEffect } from "react";

function SearchList({ searchingTitle }) {
  const [moviesData, setMoviesData] = useState([]);
  const [page, setPage] = useState(1);
  console.log(searchingTitle);

  useEffect(() => {
    const getMoviesData = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/search/movie`,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          include_adult: false,
          language: "en-US",
          original_language: "en",
          query: searchingTitle,
          page: 1,
        },
      });

      setMoviesData([...response.data.results]);
      console.log(response.data.results);
    };
    getMoviesData();
  }, [searchingTitle]);

  useEffect(() => {
    const getMoviesData = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/search/movie`,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          include_adult: false,
          language: "en-US",
          original_language: "en",
          query: searchingTitle,
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
      loader={searchingTitle !== "" && <h4>Loading...</h4>}
    >
      {searchingTitle === "" ? (
        ""
      ) : (
        <div className="container-fuid mx-3">
          <div className="row">
            {moviesData.length === 0
              ? "No se han encontrado resultados..."
              : moviesData.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        </div>
      )}
    </InfiniteScroll>
  );
}

export default SearchList;
