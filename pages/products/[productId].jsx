import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SindleProduct = () => {
  const [post, setPost] = useState({});
  console.log(post);
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
      <h1>id: {post.id}</h1>
      <h2>Title: {post.title}</h2>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default SindleProduct;
