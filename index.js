const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");

const app = express();

mongoose
  .connect("mongodb+srv://divyansh1:iVKz9tROO5qEIWkW@cluster0.iuleykq.mongodb.net/")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

app.use(express.json());

app.use("/api/v1/job/", jobRoutes);

app.listen(10000, () => console.log("Server is up and running at port 5000"));
