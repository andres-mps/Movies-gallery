import ReactStars from "react-rating-stars-component";

function StarsFilter({ setFilterValue }) {
  const starsFilter = {
    size: 30,
    count: 5,
    isHalf: true,
    value: 0,
    color: "gray",
    activeColor: "yellow",
    onChange: (newValue) => {
      setFilterValue(newValue * 2 - 2);
    },
  };

  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center align-items-end sticky-top my-3">
        <span className="starsSpan d-none d-sm-block">Filter by rating: </span>
        <ReactStars className="starsSpan" {...starsFilter} />
      </div>
    </>
  );
}

export default StarsFilter;
