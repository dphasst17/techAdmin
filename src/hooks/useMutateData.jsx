import * as apiProduct from "../api/product"
import * as apiUser from "../api/user"
import * as apiTrans from "../api/transports"
import * as apiComment from "../api/comment"
import { useCallback, useContext, useEffect, useState } from "react"
import { StateContext } from "~/context/stateContext"
const handleCheckTypeGet = (type, fName) => {
    let url;
    switch (type) {
        case 'product':
            url = apiProduct[fName]
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
    }
    return url;
}
export const useUpdateData = (type, fName, bodyData) => {
    const { setIsLoading } = useContext(StateContext)
    const [result, setResult] = useState(null);
    const [errRes, setErr] = useState(null)
    let url = handleCheckTypeGet(type, fName);
    useEffect(() => {
        setIsLoading(true)
        url(bodyData).then(res => {
            setIsLoading(false)
            setResult(res)
        })
            .catch(err => {
                setErr(err)
            })
    }, [url])
    return { result, errRes };
}
export const useUpdateDataByKey = (type, fName, bodyData, url) => {
    const { setIsLoading } = useContext(StateContext)
    const [result, setResult] = useState(null);
    const [errRes, setErr] = useState(null)
    let url = handleCheckTypeGet(type, fName);
    useEffect(() => {
        setIsLoading(true)
        url(bodyData, url).then(res => {
            setIsLoading(false)
            setResult(res)
        })
            .catch(err => {
                setErr(err)
            })
    }, [url])
    return { result, errRes };
}

export const useInsertData = (type, fName, bodyData) => {
    const { setIsLoading } = useContext(StateContext)
    const [result, setResult] = useState(null);
    const [errRes, setErr] = useState(null)
    let url = handleCheckTypeGet(type, fName);
    useEffect(() => {
        setIsLoading(true)
        url(bodyData, url).then(res => {
            setIsLoading(false)
            setResult(res)
        })
            .catch(err => {
                setErr(err)
            })
    }, [url])
    return { result, errRes };
}
export const useDeleteData = (type, fName, bodyData) => {
    const { setIsLoading } = useContext(StateContext)
    const [result, setResult] = useState(null);
    const [errRes, setErr] = useState(null)
    let url = handleCheckTypeGet(type, fName);
    useEffect(() => {
        setIsLoading(true)
        url(bodyData, url).then(res => {
            setIsLoading(false)
            setResult(res)
        })
            .catch(err => {
                setErr(err)
            })
    }, [url])
    return { result, errRes };
}
export const useDeleteDataByKey = (urlDetail) => {
    const { setIsLoading } = useContext(StateContext)
    const [result, setResult] = useState(null);
    const [errRes, setErr] = useState(null)
    let url = handleCheckTypeGet(type, fName);
    useEffect(() => {
        setIsLoading(true)
        url(urlDetail).then(res => {
            setIsLoading(false)
            setResult(res)
        })
            .catch(err => {
                setErr(err)
            })
    }, [url])
    return { result, errRes };
}