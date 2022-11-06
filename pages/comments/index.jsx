import React, { useState } from "react";

export default function comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleComments = async () => {
    const res = await fetch("/api/comment");
    const data = await res.json();
    setComments(data);
  };

  const handleSubmit = async (e) => {
    const res = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    handleComments();
  };

  const handleDelete = async (commentId) => {
    const res = await fetch(`/api/comment/${commentId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    handleComments();
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
      <input onClick={handleSubmit} type="submit" value="Add" />
      <div>
        {comments.map((comment) => {
          return (
            <div>
              <h1>
                {comment.id}. {comment.comment}
              </h1>
              <button onClick={() => handleDelete(comment.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
