import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { initialState, demoUser, authenticatedState } from "../../helpers/fixtures/authFixtures"

describe('Testing in authSlice', () => {
  
    test('should return initialState and it must be called "auth', () => {
      expect( authSlice.name ).toBe('auth');

      const state = authSlice.reducer( initialState, {});

      expect( state ).toEqual( initialState );
    });

    test('should do the authentication', () => {
      
        const state = authSlice.reducer( initialState, login( demoUser ) );

        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage:null,
        });
    });

    test('should do the logout', () => {
      
        const state = authSlice.reducer( authenticatedState, logout() );

        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        });
    });
    
    test('should do logout and send error message', () => {
        const error = 'Incorrect credentials';
        

        const state = authSlice.reducer( 
            authenticatedState, logout( { error } )
        );

        expect( state ).toEqual({
            status: 'not-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: 'Incorrect credentials'
        });
    });

    test('should change the status to checking', () => {
      
        const state = authSlice.reducer( authenticatedState, checkingCredentials() );
        
        expect( state.status ).toBe("checking");
    });
    
    
    
})
