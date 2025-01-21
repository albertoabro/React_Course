import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router';
import { useMemo, useState } from 'react';
import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { loginWithEmailPassword, startGoogleSignIn } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), '@ in email is required'],
  password: [(value) => value.length >= 6, 'Password must have more than 6 letters']
}

export const LoginPage = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const {status, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {email, password, onInputChange, isFormValid, emailValid, passwordValid,
    } = useForm(formData, formValidations);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
      event.preventDefault();
      setFormSubmitted(true);

      if( !isFormValid ) return;

      dispatch( loginWithEmailPassword(email, password) );
    }

    const onGoogleSignIn = () => {
      dispatch ( startGoogleSignIn() );
    }

    return (

     <AuthLayout title='Login'>
        
        <form onSubmit={onSubmit}>
            <Grid2 container>
              <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
                <TextField 
                  label="email"
                  type="email"
                  placeholder="email@gmail.com"
                  fullWidth
                  name='email'
                  value={email}
                  onChange={ onInputChange }
                  error = { !!emailValid && formSubmitted }
                  helperText={ formSubmitted ? emailValid : null }
                />
              </Grid2>

              <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
                <TextField 
                  label="Password"
                  type="password"
                  placeholder="password"
                  fullWidth
                  name='password'
                  value={password}
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
                <Grid2 size={{xs: 12, sm: 12, md: 6}}>
                  <Button 
                    type='submit' 
                    variant="contained" 
                    fullWidth
                    disabled={isAuthenticating}
                  >
                    Login
                  </Button>
                </Grid2>

                <Grid2 size={{xs: 12, sm: 6, md: 6}}>
                  <Button 
                    variant="contained" 
                    fullWidth 
                    onClick={onGoogleSignIn}
                    disabled={isAuthenticating}
                  >
                    <Google />
                    <Typography size={{ml:1}}>Google</Typography>
                  </Button>
                </Grid2>
              </Grid2>

            <Grid2 container direction='row' justifyContent='end' size={12}>
              <Link color="inherit" to='/auth/register' component={RouterLink}>
                Sign up
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    )
  }