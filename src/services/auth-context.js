import React, { useState, useCallback, useEffect} from "react";

let logoutTimer;


const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    pendingStorageCheck: true,
    login: (token) => {},
    logout: () => {}
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime(); // prendo in millisec.
    const adjExpirationTime = new Date(expirationTime).getTime(); 
    
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

const retriveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');

    const remainingTime = calculateRemainingTime(storedExpirationDate);
    if(remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime
    };
};

export const AuthContextProvider = (props) => {
    const tokenData = retriveStoredToken();
    let initialToken;
    if(tokenData){
        initialToken = tokenData.token;
    }

    const [token, setToken] = useState(initialToken);
    const [pendingStorageCheck, setPendingStorageCheck] = useState(true);

    const userIsLoggedIn = !!token;

    const loginHandler = (token, expirationTime) => {
        setToken(token);
        localStorage.setItem('token', token);
        localStorage.setItem('expirationTime', expirationTime);
        setPendingStorageCheck(false);
        //logica per autologout.
        const remainingTime = calculateRemainingTime(expirationTime);
        // quando faccio il login, definisco logoutTimer.
        logoutTimer = setTimeout(logoutHandler, remainingTime);
    };

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        localStorage.removeItem('id');
        localStorage.removeItem('nickname');
        // se logoutTimer ?? definito, pulisco il timeout.
        if(logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    useEffect(() => {
        if(tokenData){
            console.log(tokenData.duration);
            console.log(tokenData.token);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        pendingStorageCheck: false,
        login: loginHandler,
        logout: logoutHandler
    };

    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>);
};

export default AuthContext;