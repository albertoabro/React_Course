import { LogoutOutlined, MenuOutlined  } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"

export const Navbar = ({drawerWidth=240}) => {
  return (
    <AppBar 
        position='fixed'
        sx={{ 
            width: {sm: `calc(100% - ${ drawerWidth }px )`},
            ml: {sm: `${ drawerWidth }px`}
         }}    
    >
    
    <Toolbar>
        <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2, display:{sm: 'none'} }}
        >
            <MenuOutlined />
        </IconButton>

        <Grid2 container
            width="100%" 
            alignItems='center'
            justifyContent='space-between'
        >
            <Typography 
                variant="h6" 
                noWrap 
                component='div'
            >
                Journal App
            </Typography>
            <IconButton color="error">
                <LogoutOutlined />
            </IconButton>
        </Grid2>
    </Toolbar>
    </AppBar>
  )
}
