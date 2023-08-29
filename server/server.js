const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });


const corsOptions = {
  origin: "https://pixeltodoart.onrender.com" // frontend URI (ReactJS)
}
const app = express();
app.use(express.json());
app.use(cors(corsOptions));
const Tasks = require("./api/tasks");

const port = process.env.PORT || 4000;

const dbo = require("./db/conn.js");

dbo
  .connectToServer()
  .then(() => app.listen(port, () => console.log(`App listening on ${port}`)))
  .catch((err) => console.error(err));

  app.use("/api/tasks", Tasks);