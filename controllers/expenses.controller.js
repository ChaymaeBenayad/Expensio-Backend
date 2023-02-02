import Expense from "../models/expense.model.js";

export const AddExpense = async (req, res) => {
  // console.log(req.body);
  try {
    await Expense.create(req.body);
    res.status(201).json({ message: "Expense added successfully!" });
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};

export const DisplayExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

export const UpdateExpense = async (req, res) => {
  try {
    const updatedExpense = await Expense.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedExpense);
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
};

export const DeleteExpense = async (req, res) => {
  try {
    await Expense.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Expense deleted successfully!" });
  } catch (err) {
    res.status(400).json({ errorMessage: err.message });
  }
};
