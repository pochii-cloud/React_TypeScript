import React, { Dispatch, SetStateAction } from 'react'
import { Taskinterface } from '../interfaces/Task';
import SingleTask from '../SingleTask/SingleTask';

interface Props{
  tasks: Taskinterface[]; 
  setTasks: Dispatch<SetStateAction<Taskinterface[]>>; 
}

const Tasklist:React.FC<Props>= ({tasks,setTasks}) => {
  return (
    <div>
     {
      tasks.map((task,index)=><SingleTask key={index} task={task} tasks={tasks} setTasks={setTasks}/>)
     }
    </div>
  )
}

export default Tasklist
