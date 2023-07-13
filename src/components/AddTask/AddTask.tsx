/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Dispatch, SetStateAction, useState } from 'react'
import { Taskinterface } from '../interfaces/Task'


interface Props{
    tasks: Taskinterface[]; 
    setTasks: Dispatch<SetStateAction<Taskinterface[]>>;
}
const AddTask:React.FC<Props> = ({tasks,setTasks}) => {
    const[todo,setTodo]=useState<string>('')
     
    const addtodo=(e: { preventDefault: () => void; })=>{
        e.preventDefault()
        const tododata:Taskinterface={
            id:Math.floor(Math.random() * 1000)+1,
            title:todo,
            iscomplete:false
        }
        

       setTasks([...tasks,tododata])
       console.log(tasks)
       setTodo('')

    }
  return (
    <div className='add-task'>
      <form onSubmit={addtodo}>
        <input type='text' onChange={(e)=>setTodo(e.target.value)} value={todo} required/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default AddTask
