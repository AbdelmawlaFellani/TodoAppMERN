import { AButton, CButton, PButton } from "./CButton";
import React from "react";

function AddForm() {
  return (
    <div>
      <div className="flex justify-center pb-5 text-colortext font-GameText text-xl">Add Task</div>
      <div className="flex justify-center gap-5">
        <input
          className="button font-GameText py-1 px-2 text-colortext"
          type="text"
          placeholder="Add New Task"
        />
        <PButton />
      </div>
    </div>
  );
}

export default AddForm;
