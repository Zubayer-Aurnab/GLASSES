import { Navigate } from "react-router-dom";
import useAuth from "../HOOk/useAuth";


const Private = ({ children }) => {
    const { user, loading } = useAuth()

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if (!user?.email) {
        return <Navigate to="/login" />
    }

    return children
};

export default Private;