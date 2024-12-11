import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "../smallComponents/Navbar";
import AddBook from "./AddBook";
import AllBooks from "./AllBooks";
import UpdateBook from "./UpdateBook";
import "../stylesheets/HomeMainDiv.css";

import Carousel from "../smallComponents/Carousel";

function Home() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/update/:id" element={<UpdateBook />} />
        <Route path="/allBooks" element={<AllBooks />} />
        <Route path="/addBooks" element={<AddBook />} />
      </Routes>
      {isHomeRoute && (
        <div className="HomeMainDiv">
          <Carousel />
        </div>
      )}
    </div>
  );
}

export default Home;
