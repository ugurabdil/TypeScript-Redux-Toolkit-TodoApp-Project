import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { TodoType } from '../types/Types';

import { removeTodoById, updatetodo } from '../redux/todoSlice';
import { useDispatch } from 'react-redux';


interface TodoProps{
  todoProps:TodoType
}
function Todo({todoProps}:TodoProps) {
  const {id, content}=todoProps;

  const dispatch = useDispatch();

  const [editable , setEditable]=useState<boolean>(false);
  const [newTodo,setNewTodo]=useState<string>(content);

  const handleRemoveTodo=()=>{
    dispatch(removeTodoById(id));
  }

  const handleUpdateTodo=()=>{
    const payload={
      id:id,
      content:newTodo
    }
    dispatch(updatetodo(payload))
    setEditable(false);
  }

  return (

    <div className='todo'>
        {editable ? <input style={{width:'400px', outline:'none', border:'none', borderBottom:'2px solid lightgray'}} type='text' value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/>: <div className='todo-child-1'>
        {content}
        </div>}
        <div className='todo-child-2'>
            <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' />
            {editable? <FaRegCheckCircle onClick={handleUpdateTodo} className='icons'/>:<CiEdit  onClick={()=>setEditable(true)} className='icons' />}
            
        </div>
      
    </div>
  )
}

export default Todo
