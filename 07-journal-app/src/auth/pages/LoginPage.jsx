import { Link as RouterLink } from 'react-router';
import { Google } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {
    return (

     <AuthLayout title='Login'>
        
        <form>
            <Grid2 container>
              <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
                <TextField 
                  label="email"
                  type="email"
                  placeholder="email@gmail.com"
                  fullWidth
                />
              </Grid2>

              <Grid2 size={{ sm: 12, md: 12, lg: 6 }} sx={{ mt: 2 }}>
                <TextField 
                  label="Password"
                  type="password"
                  placeholder="password"
                  fullWidth
                />
              </Grid2>

              <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1}}>
                <Grid2 size={{xs: 12, sm: 12, md: 6}}>
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Grid2>

                <Grid2 size={{xs: 12, sm: 6, md: 6}}>
                  <Button variant="contained" fullWidth>
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