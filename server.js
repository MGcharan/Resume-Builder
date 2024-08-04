const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../../client/dist")));

// API routes here
// Example route
app.get("/api/hello", (req, res) => {
  res.send("Hello from the backend!");
});

// Handles any requests that don't match the above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
