import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({children, title=''}) => {
  return (
    <Grid2 container
    direction='column'
    alignItems='center'
    justifyContent='center'
    spacing={0}
    sx={{ minHeight:"100vh", backgroundColor: "primary.main", padding: 4 }}
    >
    
      <Grid2 
        size={{ xs: 4, sm: 4, md: 6 }}
        sx={{
            width: {md: 450},
            backgroundColor: 'white', 
            padding: 3, 
            borderRadius: 2, 
            boxShadow: 5}}>
          <Typography variant="h5" sx={{ mb: 1 }} >{title} </Typography>

          { children }

      </Grid2>
    </Grid2>
  )
}

