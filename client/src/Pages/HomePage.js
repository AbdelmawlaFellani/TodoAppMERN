import React from "react";
import AddForm from "../Components/AddForm";
import TaskList from "../Components/TaskList";


function HomePage() {
  return (
    <div>
      <div className="flex justify-center text-center text-lime-500 text-6xl font-GameTitle p-5 tracking-tight leading-snug text-stroke">
        TO-DO APP
      </div>
      <AddForm />
      <TaskList/>   
    </div>
  );
}

export default HomePage;
