import React from "react";
import "./style.css";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <a href="/">
            <img
              src={process.env.PUBLIC_URL + '/images/AkiraPhone.png'}
              alt="Logo"
              className="logo-image"
            />
          </a>
        </li>
        <li >
         <a href="/">  LogIn</a> 
        </li>
        <li>
          <a href="/Products"> Products</a> 
        </li>
        <li>
          <a href="/add-product"> AddProduct</a> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
