import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './../context/AuthContext';


const PrivateRoute = ({ children }) => {
    const { loading, user } = use(AuthContext);
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