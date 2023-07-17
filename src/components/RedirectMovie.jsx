import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function RedirectMovie() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => navigate(`/pelicula/${params.id}`));

  return <></>;
}

export default RedirectMovie;
