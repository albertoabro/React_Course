import { TodoItem } from "./TodoItem";
import PropTypes from 'prop-types';


export const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {

    return (
    <ul>
    {
        todos.map(todo => (
            <TodoItem 
                key={todo.id}
                id={todo.id}
                description={todo.description}
                done={todo.done}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
            />
        ))
    }
    </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onDeleteTodo: PropTypes.func,
    onToggleTodo: PropTypes.func
}
