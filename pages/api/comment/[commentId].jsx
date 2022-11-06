import { comments } from "../../../data/coments";

export default function handler(req, res) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  res.status(200).json(comment);
}
