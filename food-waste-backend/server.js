const express = require("express");
const mongoose = require("mongoose");
const Food = require("./models/Food");
require("dotenv").config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("MongoDB connection error:", err));

// API to Add Food Item
app.post("/add-food", async (req, res) => {
  try {
    const { name, expiryDate } = req.body;
    const newFood = new Food({ name, expiryDate });
    await newFood.save();
    res.status(201).json({ message: "Food added successfully!", food: newFood });
  } catch (error) {
    res.status(500).json({ error: "Failed to add food" });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
