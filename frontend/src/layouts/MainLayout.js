import { useEffect } from "react";
import Header from "../components/Header/Header";
import useHttp from "../hooks/use-http";

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
        <div>
            {isFetchingTestData && <div>Loading....</div>}
            {!isFetchingTestData &&<Header />}
            {!isFetchingTestData && children}
        </div>
    )
}
export default MainLayout;