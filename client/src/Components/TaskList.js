import React from "react";
import TaskItem from "./TaskItem";
function TaskList({ tasks, deleteTask, markCompleted }) {
  return (
    <div className="ease-out duration-700">
      <div className="button flex md:w-9/12 lg:w-7/12 w-11/12 m-auto my-7 bg-orange-200 pb-7">
        <ul className="flex flex-col gap-5 py-7 w-full">
          <div className="font-GameText font-bold text-colortext text-center text-2xl">
            List of Tasks
          </div>
          {tasks.map((task,index) => {
            return (
              <TaskItem
                key={index}
                task={task}
                deleteTask={deleteTask}
                markCompleted={markCompleted}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
