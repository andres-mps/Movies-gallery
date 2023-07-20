import Spinner from "react-bootstrap/Spinner";

function LoaderSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <Spinner animation="border" variant="light" />
    </div>
  );
}

export default LoaderSpinner;
