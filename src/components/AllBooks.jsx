import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/AllBooks.css";
import { useNavigate } from "react-router-dom";
function AllBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/");
        console.log("fetched Books", response.data);
        setBooks(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBooks();
  }, []);
  const handleUpdate = (_id) => {
    console.log("Navigating to update:", _id);
    // Navigate to the UpdateBook page programmatically
    navigate(`/update/${_id}`);
  };

  const handleDelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:4000/api/${_id}`);
      console.log("Deleted Succesfully!");
      setBooks(books.filter((book) => book._id !== _id));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="listOfBooks">
      <h1 id="heading">All Books</h1>
      <ul>
        {books.map((book) => (
          <div className="singleBook">
            <div className="imageDiv">
              <img src={book.image} alt="" />
            </div>
            <li key={book.name}>
              <h3 id="title">{book.name}</h3>
              <div id="authorDiv">
                <p id="authorWho"> - {book.author}</p>
                <h4> {book.price} ₹</h4>
              </div>
            </li>
            <div className="buttonDiv">
              <button onClick={() => handleUpdate(book._id)} id="bUpdate">
                Update
              </button>
              <button onClick={() => handleDelete(book._id)} id="bDelete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AllBooks;
