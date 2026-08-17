import { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;