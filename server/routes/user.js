const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");


// REGISTER
router.post("/register", registerUser);


// LOGIN
router.post("/login", loginUser);


// UPDATE ACCOUNT
router.put("/update", updateUser);


// DELETE ACCOUNT
router.delete("/delete", deleteUser);


module.exports = router;