import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MainApp } from "../../src/09-useContext/MainApp";

describe('Test in <MainApp />', () => {
  
    test('should show <HomePage />', () => {
        
        render(
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>
        );

        expect( screen.getByText('Home') ).toBeTruthy();
    });
    
})
