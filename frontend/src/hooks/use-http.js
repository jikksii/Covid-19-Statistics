import { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
const useHttp = (requestConfig,applyData , handleError) =>{
    const [isLoading,setIsLoading] = useState(false);
    const isAuth = useSelector(state => state.auth.isAuth)
    const token = useSelector(state => state.auth.token)
    if(isAuth){
        axiosInstance.defaults.headers.Authorization =  'Bearer ' + token;
    }
    const sendRequest = async () => {
        setIsLoading(true);
        axiosInstance({
            method: requestConfig.method ?requestConfig.method : 'GET',
            url: requestConfig.url,
            data: requestConfig.data ? requestConfig.data : null
        })
        .then(response => response.data)
        .then(data => {
            setIsLoading(false);
            applyData(data)
        })
        .catch(err => {
            handleError(err)
        })
        
    }
   
    return {
        isLoading ,sendRequest
    }
}
export default useHttp;