require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("Connected to mongodb database"));

const usersRoutes = require("./routes/usersRoutes");
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
