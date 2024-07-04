import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todoSlice';


function TodoCreate() {

  const dispatch=useDispatch();
  
  const [newTodo,setNewTodo]=useState<string>('');

  const handleCreateTodo = () => {
    if(newTodo.trim().length==0){
      alert('Lütfen bir todo girin')
      return;
    }
    const payload={
      id: Math.floor(Math.random()*9999999999),
      content:newTodo,
    }
    dispatch(createTodo(payload))
    setNewTodo('')
  }
  return (
    <div className='todo-Create'>
      <input 
      value={newTodo}
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
       className='todo-Create-İnput' type="text" placeholder='Todo Giriniz' />
      <button onClick={handleCreateTodo} className='todo-Create-btn'>Oluştur</button>
    </div>
  )
}

export default TodoCreate
