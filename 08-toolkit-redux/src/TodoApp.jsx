import { useState } from "react";
import { useGetTodoByIdQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);
    const {data: todo, isLoading} = useGetTodoByIdQuery(todoId);

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    }

    const prevTodo = () => {
        if( todoId === 1 ) return;

        setTodoId( todoId - 1 )
    }

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

        <pre>{JSON.stringify(todo)}</pre>

        <ul>
            {/* { For list of todos
                todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{todo.completed ? 'Done ' : 'Pending '}</strong>
                        {todo.title}
                    </li>
                )
            )} */}
        </ul>
        <button onClick={nextTodo}>
            Next Todo
        </button>
        <button onClick={prevTodo}>
            Prev Todo
        </button>
    </>
  )
}
