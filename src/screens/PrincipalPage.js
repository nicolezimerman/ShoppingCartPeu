import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import ProductList from "../components/ProductList/ProductList";
import Header from "../statics/Header";
import Nav from "../statics/Nav";
import styles from "./PrincipalPage.module.scss";

const PrincipalPage = () => {
  const [cartItem, setCartItem] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const addToCart = (product) => {
    const cartItems = cartItem.slice();
    let itemExists = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        itemExists = true;
        item.count++;
      }
    });
    if (!itemExists) {
      cartItems.push({ ...product, count: 1 });
    }

    setCartItem(cartItems);
    setShowCart(true);
  };

  const removeItemFromCart = (product) => {
    const cartItems = cartItem.slice();
    cartItems.filter((item) => {
      if (item.id === product.id) {
        item.count = item.count - 1;
        if (item.count < 1) {
          cartItems.pop(product);
        }
      }
    });
    setCartItem(cartItems);
  };

  let totalPrice = cartItem
    .reduce((tot, cur) => (tot += cur.price * cur.count), 0)
    .toFixed(2);

  return (
    <div className={styles.container}>
      <Nav onClick={() => setShowCart(!showCart)} cartItems={cartItem.length} />
      <Header />
      <ProductList addToCart={addToCart} />
      {showCart && (
        <Cart
          cartProducts={cartItem}
          onClick={() => setShowCart(false)}
          totalPrice={totalPrice}
          removeItem={removeItemFromCart}
        />
      )}
    </div>
  );
};

export default PrincipalPage;
