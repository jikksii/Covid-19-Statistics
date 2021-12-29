import { useCallback, useEffect} from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import useHttp from "../../hooks/use-http";
import styles from './MainLayout.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";
import {localeActions} from  "../../store/locale"


const MainLayout = ({children}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleError = useCallback(() => {
        
    },[]);


    const literals = useSelector(state => state.locale.activeLiterals)
    const handleLogOutRequest = () => {
        localStorage.removeItem('token');
        dispatch(authActions.setAuth(false));
        dispatch(authActions.setToken(null));
        navigate('/login')
    }



    const handleFetchLocale = useCallback(
        (data) =>{
           dispatch(localeActions.setAll(data.data))
           dispatch(localeActions.setActiveLiterals("en"))
        },
    [dispatch]);

    const {
        sendRequest: fetchLocale,
        isLoading  : isFetchingLocale
    } = useHttp(handleFetchLocale,handleError)
    


    const {
        sendRequest: LogoutRequest,
    } = useHttp(handleLogOutRequest,handleError)

    
    useEffect(()=>{
        fetchLocale({
            url:'/locale/all'
        });
    },[fetchLocale]);
    



    return (
        <div className={`${styles.MainLayout} ${isFetchingLocale && styles.Loading}` }>
            {isFetchingLocale && <Spinner/>}
            {!isFetchingLocale && 
            <div className={styles.controller}>
                <LanguageSelector/>
                <FontAwesomeIcon 
                className={styles['controller-auth']} 
                icon={faSignOutAlt} 
                onClick={() => LogoutRequest({
                                method : 'PUT',
                                url : "/logout",
                            })} 
                />
            </div>}
            {!isFetchingLocale &&<Header />}
            {!isFetchingLocale && literals && children}
        </div>
    )
}
export default MainLayout;