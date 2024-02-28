import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import useAdmin from '../components/hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    const [isAdmin,adminLoading] = useAdmin()

    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>;
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/'></Navigate>
};

export default AdminRoute;