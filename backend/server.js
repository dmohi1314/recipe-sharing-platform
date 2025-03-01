require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let users = []; // Temporary in-memory user storage

// Signup Route
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists!" });
  }

  // Store user (without hashing for now)
  users.push({ name, email, password });
  res.json({ message: "Signup successful! Please login." });
});

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) return res.status(400).json({ message: "Invalid credentials!" });

  res.json({ message: "Login successful!", user });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
