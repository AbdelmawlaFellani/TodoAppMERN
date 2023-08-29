import React from "react";
import { CButton, DButton } from "./Buttons";

function TaskItem({ task, deleteTask, markCompleted }) {
  return (
    <li  className="flex justify-center gap-1 ">
      <div className="grid grid-cols-8 md:grid-cols-12">
        <div className=" bg-white col-span-6 md:col-span-10 button text-colortext px-2 mx-4 py-2 text-ellipsis overflow-hidden font-GameText">
          <span className={task.completed ? "line-through text-opacity-75" : ""}>
          {task.title}
          </span>
        </div>

        <div className="flex col-span-2 gap-1 mr-1">
          <button onClick={(e) => markCompleted(e, task._id)}>
            <CButton />
          </button>
          <button onClick={(e) => deleteTask(e, task._id)}>
            <DButton />
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
