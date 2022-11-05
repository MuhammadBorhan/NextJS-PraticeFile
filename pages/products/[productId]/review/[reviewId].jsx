import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SindleProduct = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const { productId: reviewId } = router.query;
  console.log(reviewId);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${reviewId}`)
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
        Review Page
      </h1>
      <h1>
        {post.id}. {post.title}
      </h1>
    </div>
  );
};

export default SindleProduct;
