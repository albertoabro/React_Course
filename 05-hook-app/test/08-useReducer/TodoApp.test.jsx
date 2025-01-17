import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock('../../src/hooks/useTodo')

describe('Test in <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: {items: [{
            id: 1, description: 'Todo #1', done: false,
            id: 2, description: 'Todo #2', done: false
        }]},

        todosCounter: jest.fn(), 
        pendingTodosCount: jest.fn()    ,
        handleNewTodo: jest.fn(), 
        handleRemoveTodo: jest.fn(), 
        handleToggleTod: jest.fn()
    });
  
    test('should show the component', () => {
        render( <TodoApp />)
        screen.debug();
    })
    
})
