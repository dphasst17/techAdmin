import { useContext, useEffect, useState } from "react";
import { transUpdateStatus } from "~/api/transports";
import { StateContext } from "~/context/stateContext";
import { useGetDataByKey } from "~/hooks/useSelectData"
import closeIcon from "~/image/close.png";
import { nextValues } from "~/json/nextValueTran.js";
const DetailTrans = ({ props }) => {
    const { setShowDetail } = useContext(StateContext);
    const [valueBtn, setValueBtn] = useState([])
    let key = { idTrans: props.id }
    const { data, err } = useGetDataByKey('transports', 'transGetById', key);
    const handleChangeStatus = (idTrans, newValue) => {
        console.log(idTrans)
        console.log(newValue)
        transUpdateStatus(idTrans, newValue)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        data !== null && setValueBtn(Array.from(new Set(data.flatMap(e => e.detail.flatMap(d => d.status)))))
    }, [data])
    return <div className="t-detailItem w-screen h-screen flex items-center justify-center fixed z-50 top-0 left-0">
        <div onClick={() => { setShowDetail(false) }} className="p-detailItem-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        {data !== null && data.map(e => <div className="t-detailItem-show w-full lg:w-4/5 h-full lg:h-4/5 p-2 flex flex-col flex-wrap items-center justify-between rounded-[10px] bg-slate-600 z-40 overflow-scroll lg:overflow-hidden"
            key={e.idTrans}>
            <div className="order-detailItems w-full h-3/5 flex flex-wrap justify-between items-start">
                {e.detail.map(d => <div className="t-detailItem-show-content w-[48%] h-1/5 flex flex-wrap justify-between" key={`${e.idUser}-${d.idProduct}`}>
                    <div className="w-full h-auto flex flex-wrap justify-between">
                        <span className="w-[23%] h-auto min-h-[30px] mb-2 bg-white text-[15px] font-bold flex items-center justify-center text-center rounded-[5px]">Id: {d.idProduct}</span>
                        <span className="w-3/4 h-auto min-h-[30px] mb-2 bg-white text-[15px] font-bold flex items-center justify-center text-center rounded-[5px]">{d.name}</span>
                        <span className="w-[25%] h-auto min-h-[30px] mb-2 bg-white text-[15px] font-bold flex items-center justify-center text-center rounded-[5px]">Price: {d.price}</span>
                        <span className="w-[20%] h-auto min-h-[30px] mb-2 bg-white text-[15px] font-bold flex items-center justify-center text-center rounded-[5px]">Count: {d.count}</span>
                        <span className="w-[23%] h-auto min-h-[30px] mb-2 bg-white text-[15px] font-bold flex items-center justify-center text-center rounded-[5px]">Total: {d.count * d.price} USD</span>
                        <span className="w-[28%] h-auto min-h-[30px] mb-2 bg-white text-[15px] font-bold flex items-center justify-center text-center rounded-[5px]">{d.status}</span>
                    </div>
                </div>)}
            </div>
            <div className="btnOrder w-full h-auto flex justify-center items-center">
                {valueBtn.length !== 0 &&
                    Array.from(new Set(valueBtn.flatMap(e =>
                        nextValues.filter(n => e.includes(n.currentValue)).map(n => <button onClick={() => { handleChangeStatus(props.id, n.nextValue) }} className={`w-[200px] h-[50px] flex justify-center items-center bg-blue-500 font-semibold rounded-[5px] mx-2 
                            text-white ${(n.nextValue === "Thất bại" || n.nextValue === "Hủy") && 'bg-red-500'}`}>{n.nextValue}</button>)
                    )))
                }
            </div>

        </div>
        )}
        <div onClick={() => { setShowDetail(false) }} className="closeBtn absolute w-[70px] h-[60px] rounded-[10px] cursor-pointer flex items-center justify-center top-5 left-2 z-50">
            <img src={closeIcon} className="w-full h-full object-contain" alt="close-icon" />
        </div>
    </div>
}
export default DetailTrans;