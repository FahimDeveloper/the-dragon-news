import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetAuthRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
        return children;
    }
};

export default PrivetAuthRoute;
