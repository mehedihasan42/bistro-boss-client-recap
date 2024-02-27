import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../components/hooks/useAuth';
import useAdmin from '../components/hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    const [isAdmin,adminLoading] = useAdmin()

    if(loading || isAdmin){
        return <progress className="progress w-56"></progress>;
    }

    if(user && adminLoading){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;