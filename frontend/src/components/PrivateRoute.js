import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = ({layout : Layout }) =>{
    const isAuth = useSelector(state => state.auth.isAuth) 
    let location = useLocation();
    if(!isAuth){
        return <Navigate to="/login" state={{from : location}} />
    }
    return(
        <Layout>
            <Outlet />
        </Layout> 
    ) 
}
export default PrivateRoute;