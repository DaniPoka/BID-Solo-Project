import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Profile from '../Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { dataContext } from '../Context/DataContext';



const NavBar = () => {

    const { carro, setCarro, cantidad, setCantidad } = useContext(dataContext)

    const { isAuthenticated } = useAuth0();

    return (
        <>
            <AppBar className='appBar' color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className='logo' color="inherit">
                        <img src='https://www.agschool.edu.py/images/logoagschool.png' alt="logo" height="30px" />
                    </Typography>
                    <div />
                    <div className='buttons'>
                        <IconButton component={Link} to="/carrito" aria-label="Show cart items" color="primary">
                            <Badge badgeContent={cantidad} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        {isAuthenticated ? (<>
                            <Profile />
                            <LogoutButton /></>) : (<LoginButton />)}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;