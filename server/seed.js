require("dotenv").config();
const mongoose = require("mongoose");
const itemsCollection = require("./itemsCollection");

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");

        const collection = mongoose.connection.db.collection("Items");

        await collection.deleteMany({});
        await collection.insertMany(itemsCollection);

        console.log(`${itemsCollection.length} products inserted successfully`);

        await mongoose.disconnect();
        console.log("Database connection closed");
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

seedDatabase();