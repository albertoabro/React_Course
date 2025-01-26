import { registerUser, signInWithGoogle, signInWithCredentials, logoutFirebase } from "../../firebase/providers";
import { setClearNoteLogout } from "../journal/journalSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
    }
};

export const loginWithEmailPassword = ( email, password ) => {

    return async ( dispatch ) => {
        
        dispatch( checkingCredentials() );

        const resp = await signInWithCredentials(email, password );
        let error = resp.errorMessage;

        if( !resp.ok ){
            if( error === 'Firebase: Error (auth/invalid-credential).' )
                error = 'Incorrect email or password'
            return dispatch( logout( { error } ) );
        }

        delete(resp.ok);
        dispatch( login ( resp ) );
    }
};

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch(checkingCredentials() );

        const result = await signInWithGoogle();
        
        if( !result.ok )
            return dispatch( logout( result.errorMessage ) );

        delete(result.ok); //Remove property "ok" from result
        dispatch(login(result));

    }

};

export const startRegisteringUser = ({email, password, displayName}) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const resp = await registerUser({email, password, displayName});
        let error = resp.errorMessage;

        if( !resp.ok ){
            if (error === 'Firebase: Error (auth/email-already-in-use).')
                    error  = 'This user already exit';

            return dispatch( logout( { error }) );
        }

        delete( resp.ok );

        dispatch( login( resp ));

    }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await logoutFirebase();

        dispatch( setClearNoteLogout() );

        dispatch( logout () );
    }
}