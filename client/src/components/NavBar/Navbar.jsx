import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Profile from '../Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { useCart } from "../Context/DataContext";


const NavBar = () => {

    const { totalItems } = useCart();

    const { isAuthenticated } = useAuth0();

    return (
        <>
            <AppBar className='appBar' color="inherit">
                <Toolbar className="d-flex justify-content-between">
                    <Typography component={Link} to="/" variant="h6" className="logo d-flex align-items-center" color="inherit">
                        <img src='https://www.agschool.edu.py/images/logoagschool.png' alt="logo" height="30px" />
                    </Typography>
                    <div className="d-flex align-items-center">
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="primary" className="mx-2">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        {isAuthenticated ? (
                            <>
                                <Profile className="mx-2 mt-2" />
                                <LogoutButton className="mx-2" />
                            </>
                        ) : (
                            <LoginButton className="mx-2" />
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;