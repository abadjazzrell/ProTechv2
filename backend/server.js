import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/seed", seedRouter);
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server Running at http://localhost:${port}`);
});
