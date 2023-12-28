import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/Logo/logo.png";
import "./navBar.css";
import { Link } from "react-router-dom";

const navBar = () => {
  return (
    <nav id="navbar">
      <Link>
        <div to="/">
          <img className="navbar--imagen" src={logo} />
        </div>
      </Link>
      <ul id="navbar--list">
        <Link className="navbar--item" to="/">
          HOME
        </Link>
        <Link className="navbar--item" to="/products">
          PRODUCTOS
        </Link>
        <Link className="navbar--item" to="/category/jewelery">
          JEWELERY
        </Link>
        <Link className="navbar--item" to="/category/electronics">
          ELECTRONICS
        </Link>
        <Link>
          {" "}
          <ShoppingCartIcon className="navbar--icon" fontSize="large" />{" "}
        </Link>
        <span>5</span>
      </ul>
    </nav>
  );
};

export default navBar;
