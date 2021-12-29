import { useEffect } from "react";
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
    
    const handleFetchTestData = data =>{
        console.log(data);
    }

    const handleError = () => {
        
    }

    const handleLogOutRequest = () => {
        dispatch(authActions.setAuth(false));
        navigate('/login')
    }

    const {
        sendRequest: getTestData,
        isLoading : isFetchingTestData
    } = useHttp({url : "/test",},handleFetchTestData,handleError)
    
    const {
        sendRequest: LogoutRequest,
    } = useHttp({
        method : 'PUT',
        url : "/logout",
    },handleLogOutRequest,handleError)

    
    return (
        <div className={`${styles.MainLayout} ${isFetchingTestData && styles.Loading}` }>
            {isFetchingTestData && <Spinner/>}
            {!isFetchingTestData && 
            <div className={styles.controller}>
                <LanguageSelector/>
                <FontAwesomeIcon className={styles['controller-auth']} icon={faSignOutAlt} onClick={LogoutRequest} />
            </div>}
            {!isFetchingTestData &&<Header />}
            {!isFetchingTestData && children}
        </div>
    )
}
export default MainLayout;