import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(express.json()); // this line of code allow to send json formate of from server

const Port = process.env.PORT || 4879;

app.listen(port, () => {
  console.log(`Server is running on port ${Port}`);
});
// Here api routing
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

// creating a middlewares
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
