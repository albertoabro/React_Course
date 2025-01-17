import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";


describe('Test in <LoginPage />', () => {

    const setUserMock= jest.fn();
    
    test('should show the component without user', () => {
        
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
    });
    
    test('should call to setUser', () => {

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const setUserButton = screen.getByRole('button');
        fireEvent.click( setUserButton );

        expect(setUserMock).toHaveBeenCalled();
    });
    
})
