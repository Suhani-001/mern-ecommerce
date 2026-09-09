const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const connectDB = require("./config/db");
const userRoutes = require("./routes/user");

const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// routes
app.use("/api/user", userRoutes);
app.use("/api/items", require("./routes/items"));
app.use("/api/payment", require("./routes/payment"));

// connect to MongoDB
connectDB();

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});