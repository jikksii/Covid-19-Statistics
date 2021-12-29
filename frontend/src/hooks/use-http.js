import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
const useHttp = (applyData , handleError) =>{
    const [isLoading,setIsLoading] = useState(false);
    const isAuth = useSelector(state => state.auth.isAuth)
    const token = useSelector(state => state.auth.token)
    if(isAuth){
        axiosInstance.defaults.headers.Authorization =  'Bearer ' + token;
    }
    const sendRequest =  useCallback(async (requestConfig) => {
        setIsLoading(true);
        axiosInstance({
            method: requestConfig.method ?requestConfig.method : 'GET',
            url: requestConfig.url,
            data: requestConfig.data && requestConfig.method !== 'GET' ? requestConfig.data : null,
            params : requestConfig.method === 'GET' || !requestConfig.method ? requestConfig.data : null
        })
        .then(response => response.data)
        .then(data => {
            setIsLoading(false);
            applyData(data)
        })
        .catch(err => {
            handleError(err)
        })
        
    },[applyData,handleError]);
   
    return {
        isLoading ,sendRequest
    }
}
export default useHttp;