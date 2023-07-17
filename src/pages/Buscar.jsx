import HeaderCarousel from "../components/HeaderCarousel";
import SearchList from "../components/SearchList";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import "../components/Buscar.css";

function Buscar() {
  const [searchingTitle, setSearchingTitle] = useState("");
  console.log(searchingTitle);
  return (
    <>
      <HeaderCarousel />
      <div className="bottom_section">
        <div className="container buscador d-flex flex-wrap justify-content-center align-items-end  my-5 w-50">
          <Form.Control
            variant="dark"
            type="text"
            placeholder="Buscar película por título..."
            onChange={(event) => setSearchingTitle(event.target.value)}
            value={searchingTitle}
          />
        </div>
        <SearchList searchingTitle={searchingTitle} setSearchingTitle={setSearchingTitle} />
      </div>
    </>
  );
}

export default Buscar;
