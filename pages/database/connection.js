import mongoose from "mongoose";

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.ie2juun.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("database connected");
};

export default main;
