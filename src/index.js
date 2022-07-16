const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const usersRoutes = require("./routes/usersRoutes");
app.use("/users", usersRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
