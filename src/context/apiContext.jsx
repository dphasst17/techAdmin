import { createContext, useContext, useEffect } from "react";
import { useGetData } from "~/hooks/useSelectData";
import { StateContext } from "./stateContext";
import HandleExpToken from "~/helper/handleExpToken";
import { useGetLocalStorage } from "~/hooks/useLocalStorage";
import { getUserOne } from "~/api/user";

export const ApiContext = createContext({});
export const ApiProvider = ({children}) => {
    const {setDataProduct,setDataComment,setDataOrder,setDataUser,setUserDetail} = useContext(StateContext)
    const { dataResult:product, error:errProduct } = useGetData('product','getProduct');
    const { dataResult:comment, err:errComment } = useGetData('comment','commentGetAll');
    const {dataResult:order,err:errOrder} = useGetData('transports','transGetAll');
    const {dataResult:user,err:errUser} = useGetData('user','getAllUser');
    
    const isLogin = JSON.parse(localStorage.getItem('isLogin') || false)
    const exp = useGetLocalStorage('exp');
    const handleExpToken = HandleExpToken()
    
    useEffect(() => {
        product !== null && setDataProduct(product);
        comment !== null && setDataComment(comment);
        order !== null && setDataOrder(order);
        user !== null && setDataUser(user)
    },[
        product,setDataProduct,
        comment,setDataComment,
        order,setDataOrder,
        user,setDataUser
    ])
    useEffect(() => {
        const fetchData = async () => {
            const token = await handleExpToken();
            getUserOne(token)
            .then(res => {setUserDetail(res)})
            .catch(err => console.log(err))
        }
        fetchData()
        
    },[exp,handleExpToken])
    
    useEffect(() => {
        isLogin === false && window.location.href === "/login"
      },[isLogin])

    return <ApiContext.Provider
        value={{}}    
    >
        {children}
    </ApiContext.Provider>
}