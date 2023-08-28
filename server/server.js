const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT || 4000;

const app = express();

const dbo = require("./db/conn.js");

dbo
  .connectToServer()
  .then(() => app.listen(port, () => console.log(`App listening on ${port}`)))
  .catch((err) => console.error(err));

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send("To Do App !!"));

