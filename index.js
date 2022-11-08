const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const category = require("./data/category.json");

app.get("/", (req, res) => {
  res.send("Service Review Server Running");
});

app.get("/category", (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log(`Service Review Server running on port ${port}`);
});
