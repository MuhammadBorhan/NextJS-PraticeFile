import React, { useEffect, useState } from "react";

const index = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        New Products: {products.length}
      </h1>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h1>
                {product.id}. {product.title}
                <p>Price: {product.price}</p>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default index;
