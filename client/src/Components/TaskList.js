import React from 'react'
import TaskItem from './TaskItem'
function TaskList() {
  const array = [1,2,3,4];
  return (
    <div>
      <div className="button flex md:w-9/12 lg:w-7/12 w-11/12 m-auto my-7">
        <ul className='flex flex-col gap-5 py-7 w-full'>
          <div className='font-GameText text-colortext text-center text-xl'>List of Tasks</div>
            {array.map((e,index) => {return <TaskItem key={index}/>})}
        </ul>
      </div>
    </div>
  )
}

export default TaskList