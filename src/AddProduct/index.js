import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title,
      price,
      discountPercentage,
      thumbnail: image ? URL.createObjectURL(image) : "https://dummyimage.com/200x200",
    };

    // Extract query parameters from the current URL
    const queryParams = new URLSearchParams(location.search);
    queryParams.set("name", title);
    queryParams.set("price", price);
    queryParams.set("discount", discountPercentage);
    queryParams.set("image", newProduct.thumbnail);

    // Update the URL with the query parameters
    navigate(`/products?${queryParams.toString()}`);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
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

          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input type="file" id="image" onChange={handleImageChange} />
          </div>

          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
