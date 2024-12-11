import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const [bookImages, setBookImages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log("Fetching images");
        const response = await axios.get(
          "https://bookworm-backend-47w5.onrender.com/api/"
        );
        const topImages = response.data.slice(0, 4);
        setBookImages(topImages);
      } catch (e) {
        console.log(e);
      }
    };
    fetchImages();
  }, []);

  const exploreBooks = () => {
    navigate("/allBooks");
  };
  return (
    <>
      <div className="homePageContent">
        <h2> Your next favorite book is just a click away.</h2>
        <p>
          Discover books that spark joy and ignite your imagination in seconds.
          Dive into a curated collection of timeless classics, thrilling
          adventures, and heartwarming tales. Whether you're seeking inspiration
          or an escape, your next great read is waiting to be uncovered.
        </p>
        <button onClick={exploreBooks}>Explore books</button>
      </div>
      <div className="carousel">
        <div className="slider">
          {bookImages.map((book) => {
            return (
              <div className="item">
                <img src={book.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
