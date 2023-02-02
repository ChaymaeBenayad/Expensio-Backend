import express from "express";
import cors from "cors";
import { config } from "dotenv";
import mongoose from "mongoose";
import expensesRouter from "./routes/expenses.route.js";
import bodyParser from "body-parser";

const port = process.env.PORT || 5000;
const app = express();
config();
app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.ATLAS_URI, {})
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err.message));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", expensesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
