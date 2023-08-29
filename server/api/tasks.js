const express = require("express");
const app = express();
const router = express.Router();

const Task = require("../models/task.js");
// router.get("/test", (req, res) => res.send("TEST TEST"));

// This section will help you get a list of all the todos/tasks.
router.get("/", (req, res) => {
  Task.find()
  .then((tasks) => res.json(tasks).status(200))
  .catch = (err) => {
    res.status(500).json({ message: "Error fetching todos" });
  };
});

router.post("/new", (req, res) => {
  Task.create(req.body)
  // const newTask = new Task(req.body,{Headers : {'Content-Type': 'application/json'}})
    .then((task) =>{
        res.json(task)
    })
    .catch((err) => res.status(400).json({ error: "Error creating task" }));
});

router.delete("/delete/:id", (req, res) => {
  Task.findByIdAndRemove(req.params.id)
    .then((task) => res.json({ msg: "Task deleted successfully" }))
    .catch((err) => res.status(400).json({ error: "Error deleting task" }));
});

// Update
app.put("/completed/:id", (req, res) => {
  const task = Task.findById(req.params.id)
    .then((task) => {
      res.json({ msg: "Updated successfully" });
      task.completed = !task.completed;
      task.save();
      res.json(task);
    })
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

module.exports = router;
