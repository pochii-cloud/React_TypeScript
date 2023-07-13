import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Tasklist from './components/TaskList/Tasklist';
import { Taskinterface } from './components/interfaces/Task';
import { TasksData } from './components/TaskList/tasksdata';
import AddTask from './components/AddTask/AddTask';


function App() {
  const [tasks,setTasks]=useState<Taskinterface[]>(TasksData)
  const [show,setShow]=useState<boolean>(false)
  return (
    <div className='main'>
      <div className='container'>
      <Header show={show} setshow={setShow}/>
   {show? <AddTask tasks={tasks} setTasks={setTasks}/>:''}
    <Tasklist tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
