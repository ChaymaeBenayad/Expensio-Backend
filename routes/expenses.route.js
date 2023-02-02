import express from "express";
import {
  AddExpense,
  DisplayExpenses,
  UpdateExpense,
  DeleteExpense,
} from "../controllers/expenses.controller.js";

const router = express.Router();

//add expense
router.post("/expenses", AddExpense);

//find all expenses
router.get("/expenses", DisplayExpenses);

//update expense
router.put("/expenses/:id", UpdateExpense);

//delete expense
router.delete("/expenses/:id", DeleteExpense);

export default router;
