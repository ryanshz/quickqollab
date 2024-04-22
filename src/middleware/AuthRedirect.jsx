import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
export const AuthRedirect = ({children}) => {
    const { isAuthenticated } = useAuth();
    if(isAuthenticated) {
        return <Navigate to ='/dashboard' replace />;
    }

    return children;
};