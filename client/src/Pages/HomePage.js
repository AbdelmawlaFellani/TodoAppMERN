import React, { useEffect, useState } from "react";
import AddForm from "../Components/AddForm";
import TaskList from "../Components/TaskList";
import axios from "axios";
import { MY_URL } from "../Components/globals";

function HomePage() {
  // const [idCount,setIdCount] = useState(4)
  const [tasks, setTasks] = useState([]);
  function AddTask(task) {
    const newTask = {
      title: task.title,
      completed: task.completed,
    };
    setTasks((prev) => [...prev, newTask]);
    // setIdCount(prev => prev++);
  }
  function DeleteTask(e, id) {
    e.preventDefault();
    const updatedTasks = tasks.filter((task) => task._id !== id);
    setTasks(updatedTasks);
    axios
      .delete(`${MY_URL}/api/tasks/delete/${id}`)
      .then((response) => console.log("Task deleted successfully"))
      .catch((error) => console.log("Task deleted"));
  }
  function MarkCompleted(e, id) {
    e.preventDefault();
    const updatedTasks = tasks.map((task) => ((task._id === id) ? 
        {...task, completed: !task.completed } : task)
    );
    
    const updatedTask = updatedTasks.find((task) => task._id === id);
  
    axios
      .put(`${MY_URL}/api/tasks/completed/${id}`, { completed: updatedTask.completed })
      .then((res) => {
        setTasks(updatedTasks);
        console.log(updatedTasks);
      })
      .catch((err) => {
        console.log("Error trying to update");
      });
  }
  useEffect(() => {
    axios
      .get(`${MY_URL}/api/tasks`)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log("Error retrieving data: " + err.message);
      });
  }, []);

  return (
    <div>
      <div className="flex justify-center text-center text-lime-500 text-6xl font-GameTitle p-5 tracking-tight leading-snug text-stroke">
        TO-DO APP
      </div>
      <AddForm
        addTask={AddTask}
      />
      <TaskList
        tasks={tasks}
        deleteTask={DeleteTask}
        markCompleted={MarkCompleted}
      />
    </div>
  );
}

export default HomePage;
