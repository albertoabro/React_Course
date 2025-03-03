import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { LanguageSwitcher } from '../../components/LanguageSwitcher.jsx';
import { useForm } from '../../hooks/useForm.js';
import { useLanguage } from '../../hooks/useLanguage.js'
import { useAuthStore } from '../hooks/useAuthStore.js';
import './LoginPage.css';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
};

const signUpFormFields = {
  signUpName: '',
  signUpEmail: '',
  signUpPassword: '',
  signUpPassword2: '',
};

export const LoginPage = () => {

  const { messages } = useLanguage();

  const { startLogin, startSignUp, errorMessage } = useAuthStore();

  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( loginFormFields );
  const { signUpName, signUpEmail, signUpPassword, signUpPassword2, onInputChange } = useForm( signUpFormFields );

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };

  const signUpSubmit = (event) => {
    event.preventDefault();

    if( signUpPassword !== signUpPassword2){
      Swal.fire(messages.signUpErrorSwal, messages.signUpErrorPassword, 'error');
      return;
    }

    startSignUp({ name: signUpName, email: signUpEmail, password: signUpPassword });
  };

  useEffect(() => {
    if( errorMessage !== undefined )
      Swal.fire(messages.signInErrorSwal, errorMessage, 'error');
  }, [errorMessage]);

  return (

    <>
    <LanguageSwitcher />
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>{messages.signIn}</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input 
                  type="text"
                  className="form-control"
                  placeholder={messages.email}
                  name='loginEmail'
                  value={loginEmail}
                  onChange={onLoginInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                  type="password"
                  className="form-control"
                  placeholder={messages.password}
                  name='loginPassword'
                  value={loginPassword}
                  onChange={onLoginInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input 
                  type="submit"
                  className="btnSubmit"
                  value={messages.signIn} 
              />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>{messages.signUp}</h3>
          <form onSubmit={signUpSubmit}>
            <div className="form-group mb-2">
              <input
                  type="text"
                  className="form-control"
                  placeholder={messages.name}
                  name='signUpName'
                  value={signUpName}
                  onChange={onInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                  type="email"
                  className="form-control"
                  placeholder={messages.email}
                  name='signUpEmail'
                  value={signUpEmail}
                  onChange={onInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                  type="password"
                  className="form-control"
                  placeholder={messages.password}
                  name='signUpPassword'
                  value={signUpPassword}
                  onChange={onInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                  type="password"
                  className="form-control"
                  placeholder={messages.repeatPwd}
                  name='signUpPassword2'
                  value={signUpPassword2}
                  onChange={onInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input 
                  type="submit" 
                  className="btnSubmit" 
                  value={messages.signUp} 
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
