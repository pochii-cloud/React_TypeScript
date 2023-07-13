import React, { Dispatch, SetStateAction } from 'react'


interface Props{
    show: boolean; 
    setshow: Dispatch<SetStateAction<boolean>>; }

const Header:React.FC<Props>= ({setshow,show}) => {
  return (
    <div className='header'>
      <h2>Taskify</h2>
      <button className='add-task' onClick={()=>setshow(!show)}>Add task</button>
    </div>
  )
}

export default Header
