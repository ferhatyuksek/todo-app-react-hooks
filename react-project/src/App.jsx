import { useState } from 'react'
import Todo from './components/todoCreate'
import TodoList from './components/todoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const  createTodo = (todo) => {
    setTodos([...todos, todo])
  }
  
  return (
    <>
    <Todo onCreateTodo={createTodo}></Todo>
    <TodoList setTodos={setTodos} todos={todos}></TodoList>
    </>
  )
}

export default App
