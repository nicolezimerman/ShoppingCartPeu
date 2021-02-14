import React from "react";
import styles from "./Nav.module.scss";

const Nav = ({ onClick, cartItems }) => {
  return (
    <nav className={styles.navContainer}>
      <ul>
        <li>HOME</li>
        <li>ABOUT-US</li>
        <li>LATEST</li>
      </ul>
      <button onClick={onClick}>CART ({cartItems})</button>
    </nav>
  );
};

export default Nav;
