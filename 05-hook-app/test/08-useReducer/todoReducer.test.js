import { reducer } from "../../src/08-useReducer/todoReducerActionMap";


describe('Test in todoReducer', () => {

    const initialState = {items: [
        {   
            id: 1,
            description: 'Demo Todo',
            done: false
        }
    ]};

    test('should return the initial state', () => {
      const newState = reducer(initialState, {});
      expect( newState ).toBe( initialState );
    });

    test('should add a todo', () => {
      const action = {
        type: 'ADD_ITEM',
        payload: {
            id: 2,
            description: 'New Todo #2',
            done: false
        }
      };

      const newState = reducer(initialState, action);
      expect( newState.items.length ).toBe( 2 );
      expect( newState.items ).toContainEqual( action.payload );
    });

    test('should remove a todo', () => {

      const actionAdd = {
        type: 'ADD_ITEM',
        payload: {
            id: 2,
            description: 'New Todo #2',
            done: false
          }
      };

      const actionRemove = {
        type: 'REMOVE_ITEM',
        payload: { id: 1}
      };

      const addState = reducer(initialState, actionAdd);
      const newState = reducer(addState, actionRemove);

      expect( newState.items.length ).toBe( 1 );
      expect( newState.items ).toContainEqual( actionAdd.payload );
    });
    
    test('should do Toggle todo', () => {

      const actionAdd = {
        type: 'ADD_ITEM',
        payload: {
            id: 2,
            description: 'New Todo #2',
            done: false
          }
      };

      const actionToggle = {
        type: 'TOGGLE_ITEM',
        payload: { id: 2, field: 'done' }
      };

      const addState = reducer(initialState, actionAdd);
      const newState = reducer(addState, actionToggle);

      expect( newState.items[1].done).toBeTruthy();
    });
    
    
  
})
