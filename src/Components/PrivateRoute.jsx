import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider.jsx';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location);
    // console.log(user);
    // console.log(loading)
    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (user && user.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    return (
        <div>
          
        </div>
    );
};

export default PrivateRoute;