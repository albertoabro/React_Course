import { fireEvent, render, screen } from '@testing-library/react';
import {AddCategory} from '@/components/AddCategory'

describe('Test in <AddCategory/>', () => {
    
    const inputValue = 'Minecraft';

    test('should change the text field value', () => {
        render(<AddCategory onNewCategory={ () => {} }/>);
        // screen.debug();
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);
    });
    
    test('should call onNewCategory if input has a value', () => {
        
        const onNewCategory  = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });

        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('should not call onNewCategory if input it is empty', () => {
        
        const onNewCategory  = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    })
        
})
