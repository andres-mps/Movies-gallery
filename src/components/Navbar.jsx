import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavbarHackflix() {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold nav-link" to="/">
          <NavLink className="nav-link" to="/">
            HACKFLIX
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/search">
              Search
            </NavLink>
            {/* <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink> */}
            <NavLink className="nav-link" to="/about-this-project">
              About this project
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHackflix;
