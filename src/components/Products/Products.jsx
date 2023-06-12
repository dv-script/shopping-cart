import React, { useState, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";

import fetchProducts from "../../api/fetchProducts";
import "./Products.css";

function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect( () => {

    fetchProducts("iphone").then((response) => {
      setProducts(response);
      setLoading(false);
    });

  }, [] );

  return (

    (loading && <Loading />) || (

      <section className="products container">
        {products.map((product) => <ProductCard key={product} data={product} />)}
      </section>
    
    )
  );
}

export default Products;
