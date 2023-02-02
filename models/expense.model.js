import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Expense = new Schema({
  title: String,
  amount: Number,
  date: Date,
});

export default mongoose.model("expenses", Expense);
