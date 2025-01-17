import { initialState, reducer } from "@/08-useReducer/todoReducerActionMap";
import { useReducer, useEffect } from "react"

const init = () => {
    const localStorageTodos = JSON.parse(localStorage.getItem('todos') ) || [];
    return { items: localStorageTodos};
}

export const useTodo = () => {

    const [todos, dispatchTodos] = useReducer(reducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos.items));
    }, [todos.items]);

    const todosCounter = () => {
        return todos.items.length;
    }

    const pendingTodosCount = () => {
        return todos.items.filter( todo => !todo.done).length;
    }

    const handleNewTodo = (todo) =>{
        dispatchTodos({
            type: 'ADD_ITEM', payload: todo
        })
    }

    const handleRemoveTodo = (id) => {
        dispatchTodos({
            type: 'REMOVE_ITEM', payload: {id}
        })
    }

    const handleToggleTodo = (id) => {
        dispatchTodos({
            type: 'TOGGLE_ITEM',
            payload: {id, field: 'done'}
        })
    }

    return{
        todos: todos,
        todosCounter,
        pendingTodosCount,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    }
}