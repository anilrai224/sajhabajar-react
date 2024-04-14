import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthFailed from './authFailed/AuthFailed';
import LoginMessage from './loginMessage/LoginMessage'

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.loginStatus);
    const currentURL = window.location.href;
    const isAdmin = useSelector(state=>state.userDetail.isAdmin)

    if(currentURL.includes('admin') && !isAdmin && isLoggedIn){
        return <AuthFailed/>
    }
    if(!isLoggedIn && (currentURL.includes('profile') || currentURL.includes('admin'))){
        return <LoginMessage/>
    }else if(isLoggedIn && (currentURL.includes('login') || currentURL.includes('register'))){
        return <Navigate to='/'/>
    }else if(isLoggedIn && currentURL.includes('admin')){
        return <AuthFailed/>
    }else{
        return children
    }

};

export default PrivateRoute;
