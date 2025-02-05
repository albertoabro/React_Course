import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth/authSlice";
import { notAuthenticatedState } from "../../helpers/fixtures/authFixtures";

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();
const mockDispatch = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({

    startGoogleSignIn: () => mockStartGoogleSignIn,
    loginWithEmailPassword: ( email, password ) => { return () => mockStartLoginWithEmailPassword( email, password )}
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },

    preloadedState: {
        auth: notAuthenticatedState
    }
});

describe('Testing in < LoginPage />', () => {

    beforeEach(() => jest.clearAllMocks() );
  
    test('should show the component', () => {
       
        render( 
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        expect( screen.getAllByText('Login').length ).toBeGreaterThan(1);
    });

    test('Google´s Button should calls to startGoogleSignIn', () => {

        render( 
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click( googleBtn );

        expect( mockStartGoogleSignIn ).toHaveBeenCalled();
    });

    test('Submit should calls to loginWithEmailPassword', () => {

        const email = 'alberto@google.com';
        const password = '123456';

        render( 
            <Provider store={ store }>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', { name: 'Email' });
        fireEvent.change( emailField, { target: { name: 'email', value: email }});

        const passwordField = screen.getByTestId('password').querySelector('input');
        fireEvent.change( passwordField, { target: { name: 'password', value: password }});

        const loginForm = screen.getByLabelText('login-form');
        fireEvent.submit( loginForm );

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith(
            email,
            password
        );

    });
    
})
