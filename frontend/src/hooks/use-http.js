import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
const useHttp = (requestConfig,applyData) =>{
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    if(requestConfig.token){
        axiosInstance.defaults.headers.Authorization =  'Bearer ' + requestConfig.token;
    }
    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
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
            setError(err)
        })
        
    }
   
    return {
        isLoading ,error, sendRequest
    }
}
export default useHttp;