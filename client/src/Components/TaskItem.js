import React from "react";

function TaskItem() {
  return (
    <li className="flex justify-center gap-2 ">
    <div className="grid grid-cols-8 md:grid-cols-12">

      <div className="col-span-6 md:col-span-10 button text-colortext px-2 mx-4 py-2 text-ellipsis overflow-hidden ">sssadasdasdasdasdasd</div>
      
      <div className="flex col-span-2 gap-1" >
      <button className="pixel-add"></button>
      <button className="pixel-delete"></button>
      </div>
    </div>
    </li>
  );
}

export default TaskItem;
