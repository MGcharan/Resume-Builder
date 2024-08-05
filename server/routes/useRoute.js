const express = require("express");
const User = require("../model/userModel");
const app = express.Router();

app.post("/login", async (req, res) => {
  try {
    const result = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(400).send({ error: "Invalid username or password" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Add server-side validation if necessary
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      return res
        .status(400)
        .json({
          error:
            "Password must be at least 6 characters long and include both letters and numbers",
        });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).send("Registered successfully");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/update', async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    const result = await User.findByIdAndUpdate(_id, updateData, { new: true });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


module.exports = app;
