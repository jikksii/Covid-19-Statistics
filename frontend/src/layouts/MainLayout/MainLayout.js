import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import useHttp from "../../hooks/use-http";
import styles from './MainLayout.module.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
const MainLayout = ({children}) => {
    
    const handleFetchTestData = data =>{
        console.log(data);
    }
    const {
        sendRequest: getTestData,
        error : errorFetchingTestData,
        isLoading : isFetchingTestData
    } = useHttp({url : "/test",},handleFetchTestData)
    
    useEffect(() =>{
        getTestData()
    },[])

    const handleLogOut = () => {
        console.log("Log out");
    }

    return (
        <div className={`${styles.MainLayout} ${isFetchingTestData && styles.Loading}` }>
            {isFetchingTestData && <Spinner/>}
            {!isFetchingTestData && 
            <div className={styles.controller}>
                <FontAwesomeIcon className={styles['controller-auth']} icon={faSignOutAlt} onClick={handleLogOut} />
            </div>}
            {!isFetchingTestData &&<Header />}
            {!isFetchingTestData && children}
        </div>
    )
}
export default MainLayout;