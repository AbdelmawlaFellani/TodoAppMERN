import axios from "axios";
import { AButton } from "./Buttons";
import React, { useState } from "react";

function AddForm({ addTask }) {
  const [task, setTask] = useState({
    title: ''
  });

  function HandleSubmit(e) {
    e.preventDefault();

    if (task.title.trim() !== "") {
      addTask(task);
      axios
      .post("https://pixelto-doart.onrender.com/api/tasks/new", task)
      .then((res) => {
        setTask({ title: "" });
      })
      .catch((err) => {
        console.log("error in Adding task: " + err.message);
      });
    }
  }

  const onChange = (e) => setTask({ ...task, title: e.target.value });

  return (
    <form onSubmit={HandleSubmit}>
      <label
        htmlFor="taskInput"
        className="flex font-bold justify-center pb-5 text-colortext font-GameText text-2xl"
      >
        Add Task
      </label>
      <div className="flex justify-center gap-3 ">
        <input
          name="taskInput"
          id="taskInput"
          className="button font-GameText py-1 px-2 text-colortext"
          type="text"
          value={task.title}
          onChange={onChange}
          placeholder="Add New Task"
        />
        <button type="submit">
          <AButton />
        </button>
      </div>
    </form>
  );
}

export default AddForm;