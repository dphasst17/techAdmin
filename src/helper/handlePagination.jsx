import { useContext, useEffect, useState } from "react";
import { StateContext } from "~/context/stateContext";

const PaginationPage = (quantity, itemsInPage) => {
    const [numberPage, setNumberPage] = useState()
    const { setIsShowPaging } = useContext(StateContext)
    useEffect(() => {
        if (quantity > itemsInPage) {
            let length = quantity % itemsInPage === 0 ? quantity / itemsInPage : quantity / itemsInPage + 1;
            setIsShowPaging(true);

            let arr = [];
            for (let i = 1; i <= length; i++) {
                arr.push(i);
                setNumberPage(arr);
            }
        } else {
            setIsShowPaging(false);
        }
    }, [quantity, itemsInPage]);
    return { numberPage }
};
export default PaginationPage;