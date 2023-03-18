import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/Navbar";
import Home from "../pages/Home";


const ProtectedRoute = ({ component, ...args }) => {
    const Component = withAuthenticationRequired(component, args);
    return <Component />;
};

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {

    let path = `/`;
    const navigate = useNavigate();
    const onRedirectCallback = () => {
        navigate((path));
    };
    return (
        <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
            {children}
        </Auth0Provider>
    );
};

export default function App() {
    return (
        <BrowserRouter>
            <Auth0ProviderWithRedirectCallback
                domain="dev-a7itz3rrr3lp1gwp.us.auth0.com"
                clientId="YFLIMVe0y59HzerpqwtGFV2KA4YG6zFE"
                authorizationParams={{
                    redirect_uri: window.location.origin,
                }}
            >
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/login"
                        element={<ProtectedRoute />}
                    />
                </Routes>
            </Auth0ProviderWithRedirectCallback>
        </BrowserRouter>
    );

}