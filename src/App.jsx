import "./App.css";

import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Buscar from "./pages/Buscar";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Error404 from "./pages/Error404";
import MovieDetails from "./pages/MovieDetails";

import NavbarHackflix from "./components/Navbar";
import RedirectMovie from "./components/RedirectMovie";

function App() {
  return (
    <>
      <NavbarHackflix />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:id" element={<MovieDetails />} />
        <Route path="/movie/:id" element={<RedirectMovie />} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
