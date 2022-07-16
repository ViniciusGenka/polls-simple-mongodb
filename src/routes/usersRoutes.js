const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "All users" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `User with id ${req.params.id}` });
});

router.post("/", (req, res) => {
  res.json({ message: `User created successfully` });
});

router.put("/:id", (req, res) => {
  res.json({ message: `User with id ${req.params.id} updated successfully` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `User with id ${req.params.id} deleted successfully` });
});

module.exports = router;
