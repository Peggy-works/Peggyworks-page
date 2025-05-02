import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from 'react-router-dom';

const Navbar = ({scrollToSection}) => {
    return (
        <AppBar position='sticky' sx={{backgroundColor: '#2F3439'}}>
            <Toolbar>
                <Typography variant='h6' sx={{flexGrow: 1}}>
                    My portfolio
                </Typography>
                <Button color='inherit' onClick={scrollToSection}>
                    About Me
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar