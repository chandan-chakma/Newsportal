import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider.jsx';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(AuthContext);
    console.log(user);
    console.log(loading)
    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if (user && user.email) {
        return children;
    }
    return <Navigate to='/auth/login'></Navigate>
    return (
        <div>
          
        </div>
    );
};

export default PrivateRoute;