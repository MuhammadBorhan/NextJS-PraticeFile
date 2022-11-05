import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SindleProduct = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <div style={{ padding: "0 20px", lineHeight: "12px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          borderBottom: "2px dotted",
          paddingBottom: "20px",
        }}
      >
        Product Details Page
      </h1>
      <Link href={`/products/${post.id}/review/${post.id}`}>
        <h1>id: {post.id}</h1>
      </Link>
      <h2>Title: {post.title}</h2>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default SindleProduct;
