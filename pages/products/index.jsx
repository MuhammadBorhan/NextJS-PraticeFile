import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1
        style={{
          //   textAlign: "center",
          margin: "auto",
          color: "coral",
          borderBottom: "2px dotted",
          width: "max-content",
        }}
      >
        See All Products: {posts.slice(0, 10).length}
      </h1>
      <div>
        {posts.slice(0, 10).map((post) => {
          return (
            <div
              style={{
                width: "max-content",
                margin: "auto",
              }}
            >
              <Link href={`products/${post.id}`}>
                <h3 style={{ cursor: "pointer" }}>
                  {post.id}. {post.title}
                </h3>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
