import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = ({ onClick, cartItems }) => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about-us">ABOUT-US</Link>
        </li>
        <li>
          <Link to="/latest">LATEST</Link>
        </li>
      </ul>
      <button onClick={onClick}>CART ({cartItems})</button>
    </nav>
  );
};

export default Nav;
