import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddProduct = ({ handleNewProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price,
      discountPercentage,
      thumbnail: "https://dummyimage.com/200x200",
    };

    handleNewProduct(newProduct);

    setTitle("");
    setPrice("");
    setDiscountPercentage("");

    navigate("/products");
  };

  return (
    <div className="add-product-container">
      <div className="form-wrapper">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="discount">Discount Percentage:</label>
            <input
              type="number"
              id="discount"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
            />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
