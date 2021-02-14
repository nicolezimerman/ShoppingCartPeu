import React from "react";
import styles from "./Header.module.scss";
import firstImage from "../images/headerimage-1.jpg";
import secondImage from "../images/headerimage-2.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.pageTitle}>
        <h1>Shopping</h1>
        <p className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.firstImage}>
          <img src={firstImage} alt="first  header" />
        </div>
        <div className={styles.secondImage}>
          <img src={secondImage} alt="second header" />
        </div>
      </div>
    </header>
  );
};

export default Header;
