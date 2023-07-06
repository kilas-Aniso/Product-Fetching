import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleNewProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-container">
      <h1 className="product-heading">Products</h1>
      <Link to="/add-product">
        <button className="add-product-button">Add Product</button>
      </Link>
      <div className="product-grid">
        {products.map((item) => (
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
