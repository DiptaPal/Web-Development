import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../components/Loading/Loading';
import { AuthContext } from './../../contexts/AuthContext/AuthContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

export default PrivateRoute;