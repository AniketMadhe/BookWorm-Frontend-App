import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheets/Home.css";

function UpdateBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log("Book Id=", id);
  const [book, setBook] = useState([
    {
      name: "",
      author: "",
      description: "",
      price: "",
      image: "",
    },
  ]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        console.log("Fetching book data...");
        const response = await axios.get(
          `https://bookworm-backend-47w5.onrender.com/api/${id}`
        );
        console.log("Fetched book response:", response.data);
        setBook(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBook = {
      ...book,
      price: parseFloat(book.price),
    };
    try {
      await axios.put(
        `https://bookworm-backend-47w5.onrender.com/api/${id}`,
        updatedBook
      );
      alert("Book updated Succesfully!");
      navigate("/allBooks");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div id="formDiv">
      <div className="outerDiv">
        <h2>Update Book</h2>
        <form onSubmit={handleSubmit} className="addForm">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
          />
          <label>Author</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            value={book.description}
            onChange={handleChange}
            id="updateDesc"
          />
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={book.price}
            onChange={handleChange}
          />
          <label>Image URL:</label>
          <input
            type="url"
            name="image"
            value={book.image}
            onChange={handleChange}
          />
          <button type="submit" id="submitBtnUpdate">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateBook;
