import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
});

const borhan = mongoose.model("borhan") || mongoose.model("borhan", userSchema);

export default borhan;
