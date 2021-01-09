import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList';
import Task from './Interfaces';
import {v4 as uuid} from 'uuid';
import  './index.css'

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App(): JSX.Element{
    const [todos, setTodos] = useState<Task[]>([]);
    const todoNameRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    useEffect(() => {
        const item  = localStorage.getItem(LOCAL_STORAGE_KEY);
        if(item == null) return;
        const storedTodos = JSON.parse(item);
        if(storedTodos) setTodos(storedTodos);
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleTodo(id: string) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        if(todo == null) return;
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(){
        const name  = todoNameRef.current.value;
        if(name === '') return;
        setTodos(prevTodos => {
            return [...prevTodos, { id: uuid(), name: name, complete:false}]
        })
        todoNameRef.current.value = '';
    }
    
    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete);
        setTodos(newTodos);
    }
    
    
    return (
        <>
            <div>

                <input ref={todoNameRef} type="text" />
                <button onClick={handleAddTodo}>Add Todo</button>
                <button onClick={handleClearTodos}>Clear Completed Todos</button>
                <div>{todos.filter(todo => !todo.complete).length} left to do</div>
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
            </div>

        </>
    )
}

export default App;