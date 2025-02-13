import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../../api/calendarApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../../store/auth/authSlice";
import { useLanguage } from "../../hooks/useLanguage";
import { onLogoutCalendar } from "../../store/calendar/calendarSlice";

export const useAuthStore = () => {
    
    const { messages } = useLanguage();
    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const startLogin = async({ email, password }) => {

        dispatch( onChecking() );
        try {
        
            const { data } = await calendarApi.post('/auth', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            dispatch( onLogout( messages.signInError ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    };

    const startSignUp = async({name, email, password}) => {

        dispatch( onChecking() );
        
        try {
            
            const { data } = await calendarApi.post('/auth/new', { name, email, password });
                localStorage.setItem('token', data.token);
                localStorage.setItem('token-init-date', new Date().getTime() );
    
                dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {
            console.log(error)
            dispatch( onLogout( messages.signUpErrorSwal ) );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    };

    const checkAuthToken = async() => {

        const token = localStorage.getItem('token');

        if( !token ) return dispatch( onLogout() );

        try {
            
            const { data } = await calendarApi.get('/auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( onLogin({ name: data.name, uid: data.uid }) );

        } catch (error) {

            localStorage.clear();
            dispatch( onLogout() );
        }
    };

    const startLogout = () => {
        
        localStorage.clear();
        dispatch( onLogoutCalendar() );
        dispatch( onLogout() );
    };

    return ({
        status,
        user,
        errorMessage,
        startLogin,
        startLogout,
        startSignUp,  
        checkAuthToken,
    });
}
