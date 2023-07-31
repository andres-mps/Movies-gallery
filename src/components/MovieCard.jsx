import React from "react";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";
import MovieModal from "./MovieModal";
import { useState } from "react";

function MovieCard({ movie }) {
  const ratingStars = {
    size: 25,
    value: movie.vote_average / 2,
    isHalf: true,
    edit: false,
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card d-flex flex-column align-items-center" onClick={() => setShow(true)}>
        <img
          className="fluid w-100 h-100 my-3"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie && movie.original_title}
        />
        <ReactStars {...ratingStars} />
      </div>
      <MovieModal movie={movie} handleClose={handleClose} show={show} />
    </div>
  );
}

export default MovieCard;
