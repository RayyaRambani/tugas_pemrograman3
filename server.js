const express = require("express");
const router = require("./routes/routes");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/belajar_mongoDB")
const database = mongoose.connection;

database.on('error', (error) => {
  console.log("Failed to connect to MongoDB: ", error);
});

database.once('connected', () => {
  console.log("Connected to MongoDB");
});
app.use(express.json());
app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
