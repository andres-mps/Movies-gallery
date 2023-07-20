import HeaderCarousel from "../components/HeaderCarousel";
import MoviesList from "../components/MoviesList";
import StarsFilter from "../components/StarsFilter";
import { useState } from "react";

function Home() {
  const [filterValue, setFilterValue] = useState(0);

  return (
    <>
      <HeaderCarousel />
      <StarsFilter setFilterValue={setFilterValue} />
      <MoviesList filterValue={filterValue} setFilterValue={setFilterValue} />
    </>
  );
}

export default Home;
