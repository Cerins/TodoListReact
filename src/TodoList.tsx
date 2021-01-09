import React from 'react'
import Todo from './Todo'
import Task from './Interfaces';
import  './index.css'

interface Props {
    todos:Task[]
    toggleTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <>
            <div>
                <table>              
                    {todos.map(todo => {
                        return (
                            <>
                                <tr>
                                    <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
                                </tr>
                            </>
                        )

                    })}
                </table>

            </div>
        </>
        
    )
};

export default TodoList;
