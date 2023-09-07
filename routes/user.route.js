const express = require("express");
const {getAllUsers, createUser, getOneUser, deleteUser, updatedUser} = require("../controllers/user.controllers");

const router = express.Router();


router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.patch("/:id", updatedUser);
router.delete("/:id", deleteUser);


module.exports = router;