require("dotenv").config();

const mongoose = require("mongoose");
const Item = require("./models/itemsModel");
const itemsCollection = require("./itemsCollection");

const updateProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        for (const item of itemsCollection) {
            const { _id, ...data } = item;

            await Item.collection.updateOne(
    { _id: _id },
    { $set: data }
);
        }

        console.log("All products updated successfully!");
        mongoose.connection.close();

    } catch (error) {
        console.error(error);
        mongoose.connection.close();
    }
};

updateProducts();