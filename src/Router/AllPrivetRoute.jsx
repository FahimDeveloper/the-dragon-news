import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const AllPrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return (
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <Spinner animation="border" variant="primary" />
            </div>
        )
    }
    if (user) {
        return children
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default AllPrivetRoute;