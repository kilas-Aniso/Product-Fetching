import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./style.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
      saveProductsToStorage(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products"));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const saveProductsToStorage = (updatedProducts) => {
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const queryParams = new URLSearchParams(location.search);
  const newProductName = queryParams.get("name");
  const newProductPrice = queryParams.get("price");
  const newProductDiscount = queryParams.get("discount");
  const newProductImage = queryParams.get("image");

  const newProduct = {
    id: Date.now(),
    title: newProductName,
    price: newProductPrice,
    discountPercentage: newProductDiscount,
    thumbnail: newProductImage,
  };

  const updatedProducts = [newProduct, ...products];

  return (
    <div className="product-container">
      <h1 className="product-heading">Products</h1>
      <Link to="/add-product">
        <button className="add-product-button">Add Product</button>
      </Link>
      <div className="product-grid">
        {updatedProducts.map((item, index) => (
          <div key={item.id} className="product-item">
            <img src={item.thumbnail} alt={item.title} className="thumbnail" />
            <div className="product-details">
              <h2>{item.title}</h2>
              <p>Price: {item.price}</p>
              <p>Discount: {item.discountPercentage}%</p>
              <Link to={`/product-details/${item.id}`}>
                <button className="view-more-button">View More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
