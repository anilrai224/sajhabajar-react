import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(state => state.loginStatus);
    if(isLoggedIn){
        return <Navigate to='/'/> 
    }
    return children
};

export default PrivateRoute;
