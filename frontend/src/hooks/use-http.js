import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
const useHttp = (requestConfig,applyData , handleError) =>{
    const [isLoading,setIsLoading] = useState(false);

    if(requestConfig.token){
        axiosInstance.defaults.headers.Authorization =  'Bearer ' + requestConfig.token;
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