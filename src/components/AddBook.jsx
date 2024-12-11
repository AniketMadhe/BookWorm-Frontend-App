import React, { useState } from "react";
import axios from "axios";

function AddBook() {
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://bookworm-backend-47w5.onrender.com/api/add",
        formData
      );
      alert("Book Added Succesfully!");
    } catch (e) {
      console.log(e);
    }
    setFormData({
      name: "",
      author: "",
      description: "",
      price: "",
      image: "",
    });
  };

  return (
    <div id="formDiv">
      <div className="outerDiv">
        <h2 id="addBookText">Add Book</h2>
        <form onSubmit={handleSubmit} className="addForm">
          <lable>Book Name</lable>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <lable>Author Name</lable>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <lable>Description </lable>
          <textarea
            id="description"
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <lable>Price</lable>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <lable>Image URl</lable>
          <input
            type="url"
            name="image"
            placeholder="Image url"
            value={formData.image}
            onChange={handleChange}
          />
          <button type="submit" id="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
