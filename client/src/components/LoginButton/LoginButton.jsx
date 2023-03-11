import React from 'react'
import { useNavigate } from "react-router-dom";


const LoginButton = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    }
    return (
        <button onClick={routeChange}>Login</button>
    )
}

export default LoginButton;