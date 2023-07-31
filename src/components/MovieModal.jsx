import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import ReactStars from "react-rating-stars-component";

import "./MovieModal.css";

function MovieModal({ movie, show, handleClose }) {
  const ratingStarsConfig = {
    size: 20,
    value: movie.vote_average / 2,
    isHalf: true,
    edit: false,
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <div className="imgContainer">
            <img
              className="fluid w-100 h-100"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie && movie.original_title}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-8">
              <div className="">
                {new Date(movie.release_date).getFullYear() === 2023 && (
                  <Badge className="me-2" bg="success">
                    NEW
                  </Badge>
                )}
                <span>{new Date(movie.release_date).getFullYear()}</span>
                <h3>{movie.title}</h3>
              </div>
            </div>
            <div className="col-4 px-0">
              <div className="d-flex flex-column align-items-center gap-2">
                <ReactStars {...ratingStarsConfig} />{" "}
                <small className="votesCount">({movie.vote_count} votes)</small>
              </div>
            </div>
          </div>
          <div className="mt-2">
            {" "}
            <p>{movie.overview}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MovieModal;
