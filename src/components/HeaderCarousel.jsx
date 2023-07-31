import Carousel from "react-bootstrap/Carousel";
import "./HeaderCarousel.css";

function HeaderCarousel() {
  return (
    <div className="container-fluid mx-0 px-0 carousel-container">
      <Carousel>
        <Carousel.Item interval={10000}>
          <img
            className="carousel-image d-block w-100"
            src="https://image.tmdb.org/t/p/original/eCynaAOgYYiw5yN5lBwz3IxqvaW.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>¡Tus películas favoritas!</h3>
            <p>Encontra todas las películas en un solo lugar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className=" carousel-image d-block w-100"
            src="https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>¡Tus películas favoritas!</h3>
            <p>Encontra todas las películas en un solo lugar</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img
            className="carousel-image d-block w-100"
            src="https://image.tmdb.org/t/p/original//hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>¡Tus películas favoritas!</h3>
            <p>Encontra todas las películas en un solo lugar</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;
