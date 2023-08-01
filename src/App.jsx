import "./App.css";

import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import AboutThisProject from "./pages/AboutThisProject";
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
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movies/:id" element={<RedirectMovie />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-this-project" element={<AboutThisProject />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
