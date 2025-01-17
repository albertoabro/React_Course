/*
    *****Task****
    1.Should to mach with Snapshot
    2.Should to show init value 100
*/

import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Test in CounterApp', () => {

    const initialValue = 100;

    //Task 1
    test('should to match with snapshot', () => {
        const {container} = render( <CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
    });
    
    //Task 2
    test('should to show init value 100', () => {
        render(<CounterApp value={initialValue}/>);
        expect(screen.getByText(initialValue)).toBeTruthy();
    });
    
    test('should to increment with +1 button', () => {
        
        render(<CounterApp value={initialValue}/>);
        //For events
        fireEvent.click( screen.getByText('+1'));
        expect( screen.getByText('101')).toBeTruthy();
    });

    test('should to decrement with -1 button', () => {
        
        render(<CounterApp value={initialValue}/>);

        fireEvent.click( screen.getByText('-1'));
        expect( screen.getByText('99')).toBeTruthy();
    });
    
    test('should to reset with Reset button', () => {
        
        render(<CounterApp value={initialValue}/>);

        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        //Better way to found a component is adding aria-label='componentName' in component's tag
        //Then search this component with screen.getByRole(component, {name: 'nameComponent'}) 
        fireEvent.click( screen.getByRole('button',{name: 'btn-reset'}));

        expect( screen.getByText('100')).toBeTruthy();
    });
    
})
