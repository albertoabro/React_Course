import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Test in <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Soul´s gem',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks);

    test('should show the pending Todo to done', () => {
        render( 
            <TodoItem 
                id={todo.id} 
                description={todo.description} 
                done={todo.done}
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            />);

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('grid grid-cols-2 justify-between');
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).not.toContain('line-through');
    });
    
    test('should show the Todo completed', () => {

        todo.done = true;

        render( 
            <TodoItem 
                id={todo.id} 
                description={todo.description} 
                done={todo.done}
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            />);
        
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('line-through');
    });

    test('span should call to ToggleTodo when it do click', () => {
        render(<TodoItem 
                id={todo.id} 
                description={todo.description} 
                done={todo.done}
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('button should call to DeleteTodo', () => {
        render(<TodoItem 
                id={todo.id} 
                description={todo.description} 
                done={todo.done}
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock} 
            />
        );

        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
    
    
    
})
