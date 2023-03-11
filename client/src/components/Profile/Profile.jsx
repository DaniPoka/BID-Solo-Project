import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'


const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>is Loading...</div>
    }

    return (isAuthenticated ) && (
        <p> Hello, {user.name} </p>
    )
}
export default Profile