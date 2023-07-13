import React, { Dispatch, SetStateAction } from 'react'
import { Taskinterface } from '../interfaces/Task';


interface Props{
    task: Taskinterface; 
    tasks: Taskinterface[]; 
    setTasks: Dispatch<SetStateAction<Taskinterface[]>>;        
}


const SingleTask:React.FC<Props> = ({task,tasks ,setTasks}) => {

  const markcomplete = (id:number) => {
    setTasks(tasks.map((task) => {
      if (task.id === id) {
        return { ...task, iscomplete: !task.iscomplete };
      }
      return task;
    }));
  };


    const deletetask=(id:number)=>{
        setTasks(tasks.filter(task=>task.id !== id))
    }
  return (
    <div className='singletask'>
      <h2>{task.title}</h2>
      {task.iscomplete? 
      <h3 className='complete' onDoubleClick={()=>markcomplete(task.id)} >{task.iscomplete?'completed':'pending'}</h3>:
       <h3 className='pending' onDoubleClick={()=>markcomplete(task.id)}>{task.iscomplete?'completed':'pending'}</h3>}
      <button onClick={()=>deletetask(task.id)}>delete</button>
    </div>
  )
}

export default SingleTask
