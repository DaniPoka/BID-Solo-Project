import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { useCart } from '../Context/DataContext';

const LogoutButton = () => {
    const { logout } = useAuth0();
    const { clearCart } = useCart();

    const handleLogout = () => {
        // Remove cart items from localStorage
        clearCart();

        // Log out the user
        logout({ logoutParams: { returnTo: window.location.origin } });
    }

    return (
        <button onClick={handleLogout}>
            Sign Out
        </button>
    )
}

export default LogoutButton