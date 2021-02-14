import React from "react";
import styles from "./CartItem.module.scss";

const CartItem = ({
  image,
  altImage,
  price,
  quantity,
  itemName,
  removeItem,
}) => {
  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={altImage} />
      </div>
      <p>
        {itemName}
        <br />${price} x {quantity}
      </p>
      <button className={styles.removeButton} onClick={removeItem}>
        REMOVE
      </button>
    </div>
  );
};

export default CartItem;
