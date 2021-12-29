import { useCallback, useEffect } from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import useHttp from "../../hooks/use-http";
import styles from './MainLayout.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import LanguageSelector from "../../components/LanguageSelector/LanguageSelector";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";


const MainLayout = ({children}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleError = useCallback(() => {
        
    },[]);

    const handleLogOutRequest = () => {
        dispatch(authActions.setAuth(false));
        navigate('/login')
    }

    


    
    const {
        sendRequest: LogoutRequest,
    } = useHttp(handleLogOutRequest,handleError)


    



    return (
        <div className={`${styles.MainLayout} ${false && styles.Loading}` }>
            {false && <Spinner/>}
            {!false && 
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
            {!false &&<Header />}
            {!false && children}
        </div>
    )
}
export default MainLayout;