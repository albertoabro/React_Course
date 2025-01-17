import { fireEvent, render, screen } from '@testing-library/react'
import {GifExpertApp} from '@/GifExpertApp'

describe('Test in <GifExpertApp />', () => {
    
    const inputValue = 'Call of Duty';
    const existCategory = 'Dragon Ball';

    test('should change the text field value', () => {
        
        render(<GifExpertApp />);
        
        const input = screen.getByRole("textbox");

        fireEvent.input( input, { target: { value: inputValue } });
        
        expect(input.value).toBe(inputValue);

        screen.debug();
    });
    
    
    test('should call onAddCategory and add it in the categories', () => {

        render(<GifExpertApp />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
    });
    
    test('should call onAddCategory and not add it in the categories if exist yet', () => {
        
        render(<GifExpertApp />);

        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input( input, { target: { value: existCategory } });
        fireEvent.submit(form);

        expect(screen.getAllByText(existCategory).length).toBe(1);
    });
})
