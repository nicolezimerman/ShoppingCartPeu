import React from "react";
import styles from "./ProductList.module.scss";
import products from "../../products.json";
import Product from "../Product/Product";

const ProductList = ({ addToCart }) => {
  return (
    <div className={styles.productListContainer}>
      {products.products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          description={product.description}
          price={product.price}
          onClick={() => addToCart(product)}
          alt={product.title}
        />
      ))}
    </div>
  );
};

export default ProductList;
