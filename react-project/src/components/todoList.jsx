import React, { useState } from 'react'
import { LiaTimesCircle } from "react-icons/lia";
import { HiOutlinePencilSquare } from "react-icons/hi2"
import { FaCheck } from "react-icons/fa";
import '../css/todoCreate.css'

function TodoList({ todos, setTodos }) { 

  const [editTodoId, setEditTodoId] = useState(null) 
  const [newTodoTitle, setNewTodoTitle] = useState("") 

  const deleteTodo = (deletedTodo) => {
    setTodos([...todos.filter((todo) => todo.id !== deletedTodo.id)]);
  }


  const updateTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        return { ...todo, title: newTodoTitle }
      }
      return todo
    })
    setTodos(updatedTodos)
    setEditTodoId(null) 
  }

  return (
    <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center", marginTop:"20px"}}>
      {todos.map((todo) => (
        <div key={todo.id} className='newTodo'>
          <div>
            {editTodoId === todo.id ? 
              <input 
                value={newTodoTitle} 
                onChange={(e) => setNewTodoTitle(e.target.value)} 
                type="text" 
                className='updateİnputTodo'
              /> 
              : todo.title
            }
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LiaTimesCircle className='deleteBtn' onClick={() => deleteTodo(todo)}/>

            {editTodoId === todo.id ? 
              <FaCheck className='checkBtn' onClick={() => updateTodo(todo.id)} /> 
              : 
              <HiOutlinePencilSquare 
                className='editBtn' 
                onClick={() => {
                  setEditTodoId(todo.id);
                  setNewTodoTitle(todo.title); 
                }} 
              />
            }
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList