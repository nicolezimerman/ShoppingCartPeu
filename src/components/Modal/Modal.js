import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ product, closeModal, addToCart }) => {
  return (
    <div className={styles.modalContainer}>
      <button className={styles.closeBtn} onClick={closeModal}>
        Close
      </button>
      <div className={styles.modalWrapper}>
        <div className={styles.imgContainer}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.productContainer}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <div className={styles.sizes}>
            {product.availableSizes &&
              product.availableSizes.map((size) => <p>{size}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
