import React, { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";
import fetchProducts from "../../api/fetchProducts";
import "./Products.css";


function Products() {

  const [products, setProducts] = useState([]);

  useEffect( () => {

    fetchProducts("iphone").then((response) => {
      setProducts(response);
    });

  }, [] );

  return (
    <section className="products container">
      
      {
        products.map((product) => <ProductCard key={product} data={product} />)
      }

    </section>
  );
}

export default Products;
