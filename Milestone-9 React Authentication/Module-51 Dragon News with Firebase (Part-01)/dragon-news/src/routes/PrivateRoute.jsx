import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading/Loading';
import { AuthContext } from './../context/AuthContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>

    }

    if (user) {
        return children;
    }

    return <Navigate to="/auth/login" state={location.pathname}></Navigate>
};

export default PrivateRoute;