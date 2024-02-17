import { useContext, useEffect, useState } from "react";
import { FaEye,FaEdit,FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import LoadingUi from "~/common/Loading";
import { StateContext } from "~/context/stateContext";
import DetailTrans from "~/common/detail/detailTrans";
import ErrorPage from "~/common/ErrorPage";
import Event from "./event";
import { transUpdateShipper } from "~/api/transports";
import Bill from "./bill";
const Management = () => {
    const {dataOrder,setDataOrder,errOrder} = useContext(StateContext)
    const { showDetail, setShowDetail,dataUser } = useContext(StateContext);
    const { isLoading } = useContext(StateContext)
    const [id, setId] = useState("")
    const [idEdit,setIdEdit] = useState(0)
    const [selectValue,setSelectValue] = useState("")

    /* useEffect(() => {dataUser !== null && console.log(dataUser)},[dataUser]) */
    const changeShipper = () => {
        const checkNewValue = dataOrder.filter(f => f.idTrans ===idEdit).map(e => e.idShipper === selectValue)[0]
        if(checkNewValue || selectValue === ""){
            setIdEdit(0)
            return
        }
        transUpdateShipper(idEdit,selectValue)
        .then(res => {
            if(res.status === 200){
                setDataOrder(dataOrder.map(e => {
                    return e.idTrans !== idEdit ? {...e} : {
                        ...e,
                        idShipper:selectValue
                    }
                }))
                setIdEdit(0)
            }
            alert(res.message)
        })

    }
    return <div className="management-container w-full h-auto flex flex-wrap content-start">
        {isLoading && <LoadingUi />}
        <Event />
        <div className="order-detail w-full h-auto min-h-[100px] flex flex-wrap justify-center content-start lg:justify-between px-8 my-10">
            <h1 className="w-full h-[30px] text-[30px] font-bold text-white text-center my-8">Order management</h1>
            <div className="tbHead w-full h-[30px] flex flex-wrap justify-around border bg-slate-500 border-black border-solid">
                <div className="tbBody w-[5%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Id User</div>
                <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Name user</div>
                <div className="tbBody w-[10%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Phone</div>
                <div className="tbBody w-[5%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Costs</div>
                <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Method</div>
                <div className="tbBody w-[10%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Shipper</div>
                <div className="tbBody w-[30%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Address</div>
                <div className="tbBody w-[10%] h-full flex items-center justify-center text-white font-semibold">Action</div>
            </div>
            {dataOrder !== null && dataOrder.map(e => <div className="tbHead w-full h-[50px] flex flex-wrap justify-around bg-slate-500 border-b border-r border-l border-black border-solid"  key={e.idTrans}>
                <div className="tbBody w-[5%] h-full flex items-center justify-center text-white font-semibold">{e.idUser}</div>
                <div className="tbBody w-[15%] h-full flex items-center justify-center text-white font-semibold">{e.fullName}</div>
                <div className="tbBody w-[10%] h-full flex items-center justify-center text-white font-semibold">{e.phone}</div>
                <div className="tbBody w-[5%] h-full flex items-center justify-center text-white font-semibold">{e.costs}</div>
                <div className="tbBody w-[15%] h-full flex items-center justify-center text-white font-semibold">{e.method}</div>
                <div className="tbBody w-[10%] h-full flex items-center justify-center text-white font-semibold">
                    {idEdit === e.idTrans ? <select onChange={(e) => {setSelectValue(e.target.value)}} className="w-4/5 text-black outline-none rounded-lg">
                        <option value="">None</option>
                        {
                            dataUser!== null && dataUser.filter(f => f.role === 1).map(e => <option value={e.idUser}>{e.idUser}</option>)
                        }
                    </select>: e.idShipper}
                </div>
                <div className="tbBody w-[30%] h-full flex items-center justify-center text-white font-semibold "><span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.address}</span></div>
                <div className="tbBody w-[10%] h-full flex items-center justify-evenly text-white font-semibold">
                    {idEdit !== e.idTrans && <button onClick={() => { setShowDetail(true); setId(e.idTrans) }} className="w-[30px] h-[20px] rounded-lg flex justify-center items-center bg-blue-500 "><FaEye /></button>}
                    {idEdit !== e.idTrans && <button onClick={() => { setIdEdit(e.idTrans) }} className="w-[30px] h-[20px] rounded-lg flex justify-center items-center bg-green-500 "><FaEdit  /></button>}
                    {idEdit === e.idTrans && <button onClick={() => { changeShipper() }} className="w-[30px] h-[20px] rounded-lg flex justify-center items-center bg-green-500 "><FaCheck /></button>}
                    {idEdit === e.idTrans && <button onClick={() => { setIdEdit(0) }} className="w-[30px] h-[20px] rounded-lg flex justify-center items-center bg-red-500 "><IoClose  /></button>}
                </div>
            </div>)}

            {errOrder !== null && <ErrorPage />}
        </div>
        <Bill props={{type:'success'}}/>
        <Bill props={{type:'fail'}}/>
        {showDetail && <DetailTrans props={{ id }} />}
    </div>
}

export default Management;