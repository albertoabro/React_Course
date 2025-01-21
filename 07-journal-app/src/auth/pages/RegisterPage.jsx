import { useState, useMemo } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link as RouterLink } from 'react-router';
import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { startRegisteringUser } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [(value) => value.includes('@'), '@ in email is required'],
  password: [(value) => value.length >= 6, 'Password must have more than 6 letters'],
  displayName: [(value) => value.length >= 1, 'Name must not be empty']
}

export const RegisterPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const dispatch = useDispatch();

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo ( () => status === 'checking', [status]);

    const { displayName, email, password, onInputChange, formState,
      isFormValid, displayNameValid, emailValid, passwordValid
     } = useForm(formData, formValidations);

    const onSubmit = (event) => {
      event.preventDefault();
      setFormSubmitted(true);

      if( !isFormValid ) return;

      dispatch(startRegisteringUser(formState));
    }

    return (

     <AuthLayout title='Sign Up'>
        
        <form onSubmit={onSubmit}>
            <Grid2 container>

              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField 
                  label="Full name"
                  type="text"
                  placeholder="Name"
                  fullWidth
                  name='displayName'
                  value={ displayName }
                  onChange={ onInputChange }
                  error = { !!displayNameValid && formSubmitted }
                  helperText = { formSubmitted ? displayNameValid : null }
                />
              </Grid2>

              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField 
                  label="email"
                  type="email"
                  placeholder="email@gmail.com"
                  fullWidth
                  name='email'
                  value={ email }
                  onChange={ onInputChange }
                  error = { !!emailValid && formSubmitted }
                  helperText={ formSubmitted ? emailValid : null }
                />
              </Grid2>

              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField 
                  label="Password"
                  type="password"
                  placeholder="password"
                  fullWidth
                  name='password'
                  value={ password }
                  onChange={ onInputChange }
                  error = { !!passwordValid && formSubmitted }
                  helperText={ formSubmitted ? passwordValid : null }
                />
              </Grid2>

              <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1}}>
                <Grid2 size={12} display={ !!errorMessage ? '' : 'none'}>
                  <Alert severity='error'>{ errorMessage }</Alert>  
                </Grid2>
              </Grid2>
              
              <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1}}>
                <Grid2 size={12}>
                  <Button 
                    type='submit' 
                    variant="contained" 
                    fullWidth
                    disabled={isCheckingAuthentication}
                  >
                    Sign Up
                  </Button>
                </Grid2>
              </Grid2>

            <Grid2 container direction='row' justifyContent='end' size={12}>
              <Typography sx={{mr: 1}}>Have you account?</Typography>
              <Link 
                color="inherit" 
                to='/auth/login' 
                component={RouterLink}
                disabled={isCheckingAuthentication}
              >
                Sign in
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    )
  }