import main from "../database/connection";
import borhan from "../database/schema";

export default function handler(req, res) {
  main().catch((error) => console.error(error));
  const create = new borhan({ name: "borhan uddin" });
  create.save().then(() => {
    res.status(200).json(create);
  });
}
