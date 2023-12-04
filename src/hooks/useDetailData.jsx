import { useContext, useState } from "react";
import { StateContext } from "~/context/stateContext";

const useSetDetailData = () => {
    const { setShowDetail } = useContext(StateContext);
    const [dataDetail, setDataDetail] = useState();
    const handleDetailData = (data) => {
        setShowDetail(true);
        setDataDetail(data)
    }
    return { dataDetail, handleDetailData }
}
export default useSetDetailData;