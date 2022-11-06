import { comments } from "../../data/coments";

export default function handler(req, res) {
  res.status(200).json(comments);
}
