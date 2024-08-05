const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const dbConnect = require("./db.connect");
dbConnect;

const userRouter = require("./routes/useRoute");
app.use("/api/user/", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running successfully on Port:", PORT);
});
