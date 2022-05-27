import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Element }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    //const loading = useSelector(state => state.auth.loading);
    //console.log("loading" + loading)

    //if (loading) return <p>Loading...</p>;
    if (isAuthenticated) return <Element />;

    return <Navigate to="/login" />;
};

export default PrivateRoute;

