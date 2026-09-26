const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ===============================
// REGISTER USER
// ===============================

const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            userId: user._id
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// ===============================
// LOGIN USER
// ===============================

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({

            message: "Login successful",

            token,

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// ===============================
// UPDATE USER
// ===============================

const updateUser = async (req, res) => {

    try {

        const { userId, name } = req.body;

        if (!userId || !name) {

            return res.status(400).json({
                message: "User ID and name are required"
            });

        }

        const user = await User.findByIdAndUpdate(
            userId,
            {
                name: name
            },
            {
                new: true
            }
        );

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json({

            message: "Account updated successfully",

            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// ===============================
// DELETE USER
// ===============================

const deleteUser = async (req, res) => {

    try {

        const { userId } = req.body;

        if (!userId) {

            return res.status(400).json({
                message: "User ID is required"
            });

        }

        const user = await User.findByIdAndDelete(userId);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json({
            message: "Account deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    registerUser,
    loginUser,
    updateUser,
    deleteUser
};