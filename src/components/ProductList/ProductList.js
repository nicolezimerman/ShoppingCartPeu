import React, { useState } from "react";
import styles from "./ProductList.module.scss";
import products from "../../products.json";
import Product from "../Product/Product";
import Modal from "../Modal/Modal";

const ProductList = ({ addToCart }) => {
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const showModalPopUp = (product) => {
    setProduct(product);
    setShowModal(true);
  };
  return (
    <div className={styles.productListContainer}>
      {products.products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          description={product.description}
          price={product.price}
          showModal={() => showModalPopUp(product)}
          onClick={() => addToCart(product)}
          alt={product.title}
        />
      ))}
      {showModal && (
        <Modal product={product} closeModal={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default ProductList;
