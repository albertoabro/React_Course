import { Link as RouterLink } from 'react-router';
import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';


export const RegisterPage = () => {
    return (

     <AuthLayout title='Sign Up'>
        
        <form>
            <Grid2 container>

              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField 
                  label="Full name"
                  type="text"
                  placeholder="Name"
                  fullWidth
                />
              </Grid2>

              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField 
                  label="email"
                  type="email"
                  placeholder="email@gmail.com"
                  fullWidth
                />
              </Grid2>

              <Grid2 size={12} sx={{ mt: 2 }}>
                <TextField 
                  label="Password"
                  type="password"
                  placeholder="password"
                  fullWidth
                />
              </Grid2>

              <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1}}>
                <Grid2 size={12}>
                  <Button variant="contained" fullWidth>
                    Sign Up
                  </Button>
                </Grid2>
              </Grid2>

            <Grid2 container direction='row' justifyContent='end' size={12}>
              <Typography sx={{mr: 1}}>Have you account?</Typography>
              <Link color="inherit" to='/auth/login' component={RouterLink}>
                Sign in
              </Link>
            </Grid2>
          </Grid2>
        </form>
      </AuthLayout>
    )
  }