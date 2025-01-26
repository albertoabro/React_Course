import { logoutFirebase, registerUser, signInWithCredentials, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, loginWithEmailPassword, startGoogleSignIn, startLogout, startRegisteringUser } from "../../../src/store/auth/thunks";
import { setClearNoteLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../helpers/fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe('Testing in AuthThunks', () => {
    
    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should invoke the checkingCredentials', async() => {
      
        await checkingAuthentication() ( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    });

    test("startGoogleSingIn have to call checkingCredentials" + 
        "and login - Correct", async() => {
        
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });

    test("startGoogleSingIn have to call checkingCredentials" + 
        "and login - Error", async() => {

        const loginData = { ok: false, errorMessage: 'Error with authentication' };
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( 
            logout( loginData.errorMessage ) 
        );
    });

    test('loginWithEmailPassword have to call checkingCredentials' + 
        "and login - Correct", async() => {
      
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await signInWithCredentials.mockResolvedValue( loginData );
        await loginWithEmailPassword( formData )( dispatch );
        
        delete( loginData.ok );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ));
    });
    
    test('loginWithEmailPassword have to call checkingCredentials' + 
        "and login - Error", async() => {
      
        const loginData = { ok: false, errorMessage: 'Incorrect email or password' };
        const formData = { email: 'errorEmail', password: '123456' };

        await signInWithCredentials.mockResolvedValue( loginData );
        await loginWithEmailPassword( formData )( dispatch );

        const error = loginData.errorMessage;
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( { error } ));
    });
    
    test('startRegisteringUser have to call checkingCredentials' +
        'and login - Correct', async() => {

        const loginData = {ok: true, ...demoUser};
        const formData = { 
            email: demoUser.email, 
            password: '123456', 
            displayName: demoUser.displayName
        };
        const { email: emailForm, password, displayName: dNameForm } = formData;
    
        await registerUser.mockResolvedValue( loginData )( dispatch );
        await startRegisteringUser( { emailForm, password, dNameForm } )( dispatch );

        delete(loginData.ok);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
    });

    test('startRegisteringUser have to call checkingCredentials' +
        'and login - Error', async() => {

        const errorMessage = 'This user exist';

        const loginData = {ok: false, errorMessage };
        const formData = { 
            email: demoUser.email, 
            password: '123456', 
            displayName: demoUser.displayName
        };
        const { email: emailForm, password, displayName: dNameForm } = formData;
    
        await registerUser.mockResolvedValue( loginData )( dispatch );
        await startRegisteringUser( { emailForm, password, dNameForm } )( dispatch );

        const error = loginData.errorMessage;

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( {error} ) );
    });
    
    test('startLogout have to call setClearNoteLogout' +
        'logoutFirebase and logout', async() => {
        
        await startLogout()( dispatch );

        expect( logoutFirebase ).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( setClearNoteLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );
    })
})
