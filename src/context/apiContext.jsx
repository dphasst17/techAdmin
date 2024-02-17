import { createContext, useContext, useEffect } from "react";
import { useGetData } from "~/hooks/useSelectData";
import { StateContext } from "./stateContext";
import HandleExpToken from "~/helper/handleExpToken";
import { useGetLocalStorage } from "~/hooks/useLocalStorage";
import { getUserOne } from "~/api/user";
import { getAllOrderFail, getAllOrderSuccess } from "~/api/order";

export const ApiContext = createContext({});
export const ApiProvider = ({ children }) => {
    const { 
        setDataProduct, setDataComment, setDataOrder, setDataUser, setUserDetail,setDataDiary,setDataTotal,setDataPost,setDataAddress,
        setErrProduct, setErrComment, setErrOrder, setErrUser,setErrDiary,setErrTotal,setErrPost,setErrAddress,setDataType,setDataSale,setErrSale,
        setOrderSuccess,setOrderFail,setErrOrderSuccess,setErrOrderFail
    } = useContext(StateContext)
    const { dataResult: sale, err: errSale } = useGetData('product', 'getSaleEvent');
    const { dataResult: product, err: errProduct } = useGetData('product', 'getProduct');
    const { dataResult: type, err: errType } = useGetData('product', 'getInfoType');
    const { dataResult: comment, err: errComment } = useGetData('comment', 'commentGetAll');
    const { dataResult: order, err: errOrder } = useGetData('transports', 'transGetAll');
    const { dataResult: user, err: errUser } = useGetData('user', 'getAllUser')
    const { dataResult: address, err: errAddress } = useGetData('user', 'getAllAddress');;
    const { dataResult:diary, err:errDiary } = useGetData('ware', 'getAllWare');
    const { dataResult:total, err:errTotal } = useGetData('ware', 'getTotalProduct');
    const { dataResult:post, err:errPost } = useGetData('posts', 'getPosts');
    const isLogin = useGetLocalStorage('isLogin')
    const exp = useGetLocalStorage('exp');
    const handleExpToken = HandleExpToken()
    useEffect(() => {
        getAllOrderSuccess().then(
            res => {
                if(res.status === 200){
                    setOrderSuccess(res.data)
                }
            }
        )
        getAllOrderFail().then(
            res => {
                if(res.status === 200){
                    setOrderFail(res.data)
                }
            }
        )
    },[])
    useEffect(() => {
        product !== null && setDataProduct(product);
        comment !== null && setDataComment(comment.lastResult);
        order !== null && setDataOrder(order);
        user !== null && setDataUser(user);
        address !== null && setDataAddress(address);
        diary !== null && setDataDiary(diary);
        total !== null && setDataTotal(total);
        post !== null && setDataPost(post)
        type !== null && setDataType(type.data)
        sale !== null && setDataSale(sale.data)
    }, [
        product, setDataProduct,
        comment, setDataComment,
        order, setDataOrder,
        user, setDataUser,
        address,setDataAddress,
        diary,setDataDiary,
        total,setDataTotal,
        post,setDataPost,
        sale,setDataSale,
    ])

    useEffect(() => {
        errProduct !== null && setErrProduct(errProduct);
        errComment !== null && setErrComment(errComment);
        errOrder !== null && setErrOrder(errOrder);
        errUser !== null && setErrUser(errUser);
        errAddress !== null && setErrAddress(errAddress);
        errDiary !== null && setErrDiary(errDiary);
        errTotal !== null && setErrTotal(errTotal);
        errPost !== null && setErrPost(errPost);
        errSale !== null && setErrSale(errSale)
    },[
        errProduct, setErrProduct,
        errComment, setErrComment,
        errOrder, setErrOrder,
        errUser, setErrUser,
        errAddress, setErrAddress,
        errDiary,setErrDiary,
        errTotal,setErrTotal,
        errPost,setErrPost,
        errSale,setErrSale
    ])
    useEffect(() => {
        const fetchData = async () => {
            const token = await handleExpToken();
            getUserOne(token)
                .then(res => { setUserDetail(res) })
                .catch(err => console.log(err))
        }
        isLogin === true && fetchData()

    }, [exp,isLogin])
    useEffect(() => {
        !isLogin  || isLogin === false || isLogin === 'false' && window.location.href === "/login"
    },[isLogin])

    return <ApiContext.Provider
        value={{}}
    >
        {children}
    </ApiContext.Provider>
}