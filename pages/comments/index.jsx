import React, { useState } from "react";

export default function comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleComments = async () => {
    const res = await fetch("/api");
    const data = await res.json();
    setComments(data);
  };
  return (
    <div>
      <button onClick={handleComments}>Load Comments {comments.length}</button>
      <br />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <input type="submit" value="Add" />
      <div>
        {comments.map((comment) => {
          return (
            <div>
              <h1>
                {comment.id}. {comment.comment}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}