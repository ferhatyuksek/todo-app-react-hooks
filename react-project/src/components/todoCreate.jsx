import React, { useState } from 'react'
import '../css/todoCreate.css'


function todo({onCreateTodo}) {
  const [newTodo, setNewTodo] = useState("")

  const cleanTodos = () => {
    setNewTodo("")
  }

  const todoCreate = () => {
    if(!newTodo) return alert('Lütfen bir todo giriniz')
      const request={
        id: Math.floor(Math.random() * 100000),
        title: newTodo
  }
  onCreateTodo(request)
  cleanTodos()  
}

  return (
    <div>
      <div style={{margin:"0px"}}>
        <h1 style={{letterSpacing:"5px"}}>- TODO UYGULAMASI -</h1>
        <hr />
      </div>
      <input s
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      type="text" className='inputTodo'/>
      <div className='todoBtn'>
        <button onClick={todoCreate}>Todo Oluştur</button>
      </div>
      
    </div>
  )
}

export default todo
