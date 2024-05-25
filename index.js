const { Client } = require("pg");
const express = require("express");
const app = express();
const port = 3000;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "rekar",
  port: 5432,
});

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));

app.get("/", (req, res) => {
  res.send("Rekar Omar!");
});

app.listen(port, () => {
  console.log(` port ${port}`);
});
