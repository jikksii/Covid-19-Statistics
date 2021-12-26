import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Spinner from "../../components/Spinner/Spinner";
import useHttp from "../../hooks/use-http";
import styles from './MainLayout.module.css'
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

    return (
        <div className={`${styles.MainLayout} ${isFetchingTestData && styles.Loading}` }>
            {isFetchingTestData && <Spinner/>}
            {!isFetchingTestData &&<Header />}
            {!isFetchingTestData && children}
        </div>
    )
}
export default MainLayout;