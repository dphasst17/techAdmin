import { useState } from "react";

const useList = () => {
    const [list, setList] = useState([]);
    const handleSetList = (idProduct) => {
        setList(
            list.includes(idProduct) ? list.filter(i => i !== idProduct) : [...list, idProduct]
        )
    }
    return { list, handleSetList }
}
export default useList