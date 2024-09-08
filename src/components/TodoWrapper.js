import React from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react'
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';
const TodoWrapper = () => {
    const [Todos, setTodos] = useState([]);

    // add todo
    const addTodo = (Todo)=>{
        setTodos([...Todos, {id:uuidv4(), task:Todo, completed:false, isEditing: false}],);

    }

    //delete todo
    const deleteTodo=(id)=>setTodos(Todos.filter((todo)=>todo.id !== id));
    console.log("todos" , Todos);

    //toggle Complete todo
    const toggleComplete=(id)=>{
        setTodos(Todos.map((todo)=>todo.id===id? {...todo, completed: !todo.completed}: todo));
    }

    //edit todo
    const editTodo=(id)=>{
        setTodos(Todos.map((todo)=>todo.id===id ? {...todo, isEditing:!todo.isEditing}: todo));
    }
    const editTask=(task,id)=>{
        setTodos(
            Todos.map((todo)=>todo.id===id? {...todo, task, isEditing:!todo.isEditing}: todo)
        )
    }
  return (
    <div className='TodoWrapper'>
      <h1>Web development tasks!</h1>
      <TodoForm addTodo={addTodo}/>

      {/* display todos */}
        {Todos.map((todo)=>todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
        ): (
            <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
            />
        ))}
    </div>
  )
}

export default TodoWrapper
