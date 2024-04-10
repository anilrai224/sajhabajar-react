import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthFailed from './authFailed/AuthFailed';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.loginStatus);
    const currentURL = window.location.href;
    const isAdmin = useSelector(state=>state.loginStatus)

    if(currentURL.includes('admin') && !isLoggedIn){
        return <AuthFailed/>
    }
    if(isLoggedIn){
        return <Navigate to='/'/> 
    }
    return children
};

export default PrivateRoute;
