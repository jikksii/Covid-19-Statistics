import { Navigate, Outlet, useLocation } from "react-router-dom";
const PrivateRoute = ({layout : Layout }) =>{
    let isAuth = true;
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