import * as apiProduct from "../api/product"
import * as apiUser from "../api/user"
import * as apiTrans from "../api/transports"
import * as apiComment from "../api/comment"
import * as apiStatistical from "../api/statistical"
import * as apiPosts from "../api/posts"
import * as apiWare from "../api/warehouse"
import { useCallback, useContext, useEffect, useState } from "react"
import { StateContext } from "~/context/stateContext"
const handleCheckTypeGet = (type,fName) => {
    let url;
    switch (type){
        case 'product':
            url =  apiProduct[fName]
            break;
        case 'user':
            url = apiUser[fName]
            break;
        case 'transports':
            url = apiTrans[fName]
            break;
        case 'comment':
            url = apiComment[fName]
            break;
        case 'sta':
            url = apiStatistical[fName]
            break;   
        case 'posts':
            url = apiPosts[fName]
            break;  
        case 'ware':
            url = apiWare[fName]
            break;
    }
    return url;
}

export const useGetData = (type,fName) => {
    const {setIsLoading} = useContext(StateContext)
    const [dataResult ,setDataResult] = useState(null);
    const [err,setErr] = useState(null)
    let url = handleCheckTypeGet(type,fName);
    useEffect(() => {
        setIsLoading(true)
        url().then(res => {
            if(res.status === 500){
                throw Error({status:res.status,message:res.messages})
            }
            setIsLoading(false)
            setDataResult(res)

        })
        .catch(err => {
            setIsLoading(false)
            setErr(err)
        })
    },[url])
    return {dataResult,err};
}
export const useGetDataByKey = (type,fName,key) => {
    const {setIsLoading} = useContext(StateContext)
    const [data ,setData] = useState(null);
    const [err,setErr] = useState(null)
    const url = useCallback(handleCheckTypeGet(type,fName), [type, fName]);
    useEffect(() => {
        setIsLoading(true)
        url(key).then(res => {
            if(res.status === 500){
                throw Error({status:res.status,message:res.messages})
            }
            setIsLoading(false)
            setData(res)
        })
        .catch(err => {
            setIsLoading(false)
            setErr(err)
        })
    },[url])
    return {data,err};
}