import Cookies from "js-cookie";
import { useCallback } from "react"
import { useGetLocalStorage, useSetLocalStorage } from "~/hooks/useLocalStorage"

const HandleExpToken = () => {
    const handleCheckExp = useCallback(async () => {
        const exp = useGetLocalStorage('exp');
        if (exp && new Date().getTime() < new Date(exp * 1000).getTime()) {
            const token = Cookies.get('token')
            return token;
        } else {
            useSetLocalStorage({ key: 'isLogin', value: false })
            useSetLocalStorage({ key: 'role', value: false })
        }
    }, [])
    return handleCheckExp
}
export default HandleExpToken