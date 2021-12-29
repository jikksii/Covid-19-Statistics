import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { authActions } from "../store/auth";

const PrivateRoute = ({layout : Layout }) =>{
    const isAuth = useSelector(state => state.auth.isAuth) 
    let location = useLocation();
    const dispatch = useDispatch()
    

    if(!isAuth){
        let token = localStorage.getItem('token');
        if(token){
            dispatch(authActions.setAuth(true))
            dispatch(authActions.setToken(token))
        }
        return <Navigate to="/login" state={{from : location}} />
    }
    return(
        <Layout>
            <Outlet />
        </Layout> 
    ) 
}
export default PrivateRoute;