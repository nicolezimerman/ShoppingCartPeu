import React from "react";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.scss";
import Fade from "react-reveal/Fade";
const Cart = ({ cartProducts, onClick, totalPrice, removeItem }) => {
  return (
    <Fade right>
      <div className={styles.cartContainer}>
        <div>
          <div className={styles.buttonContainer}>
            <button onClick={onClick}>X</button>
          </div>
          <h1>Cart:</h1>
          {cartProducts.length > 0 ? (
            cartProducts.map((product) => (
              <CartItem
                key={product.id}
                image={product.image}
                altImage={product.title}
                itemName={product.title}
                price={product.price}
                quantity={product.count}
                removeItem={() => removeItem(product)}
              />
            ))
          ) : (
            <div className={styles.addItem}>Add items!</div>
          )}
        </div>

        <h3>Total: {totalPrice}</h3>
      </div>
    </Fade>
  );
};

export default Cart;
