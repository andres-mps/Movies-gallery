import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieDetails.css";
import ReactStars from "react-rating-stars-component";
import Spinner from "../components/Spinner";

function MovieDetails() {
  const params = useParams();

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/movie/${params.id}}`,
        params: {
          api_key: import.meta.env.VITE_API_KEY,
        },
      });

      setMovieData(response.data);
    };
    getMovieData();
  }, []);

  const ratingStarsConfig = {
    size: 20,
    value: movieData ? movieData.vote_average / 2 : 0,
    isHalf: true,
    edit: false,
  };

  return movieData ? (
    <>
      {console.log(movieData)}
      <div className="container-fluid">
        <div className="imgContainer">
          <img
            className="fluid w-100 h-100"
            src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
            alt={movieData && movieData.original_title}
          />
          <div className="overlay"></div>
        </div>
        <div>
          <div className="row">
            <div className="col-8">
              <div className="">
                {new Date(movieData.release_date).getFullYear() === 2023 && (
                  <Badge className="me-2" bg="success">
                    NEW
                  </Badge>
                )}
                <span>{new Date(movieData.release_date).getFullYear()}</span>
                <h3>{movieData.title}</h3>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex flex-column align-items-center gap-2">
                <ReactStars {...ratingStarsConfig} />
                <small className="votesCount">({movieData.vote_count} votes)</small>
              </div>
            </div>
          </div>
          <div>
            <p>{movieData.overview}</p>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Spinner />
  );
}

export default MovieDetails;
