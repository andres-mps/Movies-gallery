import React from "react";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";
// import MovieModal from "./MovieModal";
import { Link, NavLink } from "react-router-dom";

function MovieCard({ movie }) {
  const ratingStars = {
    size: 25,
    value: movie.vote_average / 2,
    isHalf: true,
    edit: false,
  };

  return (
    <div className="col-6 col-md-4 col-lg-3">
      <Link to={`/pelicula/${movie.id}`}>
        <div className="card d-flex flex-column align-items-center">
          <img
            className="fluid w-100 h-100 my-3"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie && movie.original_title}
          />
          <ReactStars {...ratingStars} />
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
