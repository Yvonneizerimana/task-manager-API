import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/taskRoute.js";
import notFound from "./middleware/routesMiddleware.js";
import errorHandler from "./middleware/errorHandler.js";
const app = express();
dotenv.config();
app.use(express.json());

const url = process.env.MODULE_URI;
mongoose.connect(url)
  .then(() => {
    console.log("Database connected successfully");
    app.use("/api/taskManager", router);
    app.use(notFound);
    app.use(errorHandler);
    const port = process.env.PORT;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });