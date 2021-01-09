import React from 'react'
import Task from './Interfaces';

interface Props {
    todo: Task;
    toggleTodo: (id:string) => void;
}

const TodoList: React.FC<Props> = ({todo, toggleTodo}) => {
    function handleTodoClick(){
        toggleTodo(todo.id);
    }
    return (
        <>
            <th className="checkbox"><input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/></th>
            <th align="left">{todo.name}</th>
            
        </>
    )
};

export default TodoList;
