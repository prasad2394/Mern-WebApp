import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    //Store Token in Local Storage
    const storeTokeninLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    };

    //Logout Functionality
    let isLoggedIn = !! token;
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    return <AuthContext.Provider value={{isLoggedIn, storeTokeninLS, LogoutUser}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}