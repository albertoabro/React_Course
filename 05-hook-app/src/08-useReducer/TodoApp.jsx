import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "@/hooks/useTodo";

export const TodoApp = () => {

    const{todos, todosCounter, pendingTodosCount,handleNewTodo, handleRemoveTodo, handleToggleTodo} = useTodo();

    return (
        <>
            <h1>TODO APP: {todosCounter()}, <small>Pending: {pendingTodosCount()}</small></h1>
            <hr/>
                <div className="grid gap-4 grid-cols-2">
                    
                    <TodoList 
                        todos={todos.items}
                        onDeleteTodo={ handleRemoveTodo }
                        onToggleTodo={ handleToggleTodo }
                    /> 

                    <div className="col-start-2">
                        <h4>Add TODO</h4>
                        <hr/>
                        <TodoAdd onNewTodo={handleNewTodo}/>
                    </div>
                </div>
        </>
    )
}