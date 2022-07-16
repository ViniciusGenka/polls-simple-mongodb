const express = require("express");
const router = express.Router();

const usersControllers = require("../controllers/usersControllers");

router.get("/", usersControllers.findAll);

router.get("/:id", usersControllers.findOne);

router.post("/", usersControllers.create);

router.put("/:id", usersControllers.update);

router.delete("/:id", usersControllers.remove);

module.exports = router;
