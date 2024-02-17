import { useContext, useEffect, useState } from "react"
import { StateContext } from "~/context/stateContext"
import { FaEye } from "react-icons/fa";
import { getAllOrderDetail } from "~/api/order";
const BillDetail = ({ props }) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(false)
    useEffect(() => {
        getAllOrderDetail(props.type, props.id).then(res => {
            if (res.status === 200) {
                setData(res.data)
            } else {
                setErr(!err)
            }
        })
    }, [props.type, props.id])
    return <div className="p-detailItem w-full h-screen flex items-center justify-center fixed z-50 top-0 left-0 ">
        <div onClick={() => { props.setBillDetail(false) }} className="p-detailItem-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        <div className="t-detailItem-show w-full lg:w-4/5 h-full lg:h-4/5 p-2 flex flex-col contents-center justify-start rounded-[10px] bg-slate-600 z-40">
            <h1 className="w-full text-[30px] flex justify-center text-white font-bold">#{props.id} Order {props.type}</h1>
            <table>
                <tr>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t border-l">Id</th>
                    <th className="text-white w-[40%] border-solid border-slate-300 border-r border-b border-t">Name</th>
                    <th className="text-white w-[20%] h-auto border-solid border-slate-300 border-r border-b border-t">Images</th>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t">Count</th>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t">Price</th>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t">Discount</th>
                </tr>
                {data?.flatMap(e => e.detail).map(d => <tr key={`${d.idProduct}-${props.id}`}>
                <td className="text-white text-center border-solid border-slate-300 border-b">{d.idProduct}</td>
                    <td className="text-white border-solid border-slate-300 border-b text-left">{d.nameProduct}</td>
                    <td className="text-white  w-[20%] border-solid border-slate-300 border-b">
                        <img src={d.imgProduct} className="w-[60px] h-[50px] mx-auto object-contain"/>
                    </td>
                    <td className="text-white text-center border-solid border-slate-300 border-b">{d.countProduct}</td>
                    <td className="text-white text-center border-solid border-slate-300 border-b">{d.price} USD</td>
                    <td className="text-white text-center border-solid border-slate-300 border-b">{d.discount} %</td>
                </tr>)}
            </table>
        </div>
    </div>
}
const Bill = ({ props }) => {
    const { orderSuccess, orderFail } = useContext(StateContext)
    const [billDetail, setBillDetail] = useState(false)
    const [idDetail, setIdDetail] = useState(0)
    return <div className="bill w-full h-auto min-h-[100px] flex flex-wrap justify-center content-start lg:justify-between px-8 my-10">
        <h1 className="w-full h-[30px] text-[30px] font-bold text-white text-center my-8">Order {props.type}</h1>
        <div className="tbHead w-full h-[30px] flex flex-wrap justify-around border bg-slate-500 border-black border-solid">
            <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Id</div>
            <div className={`tbBody ${props.type === 'success' ? 'w-[13%]' : 'w-[15%]'} h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold`}>Id user</div>
            {props.type === 'success' && <div className="tbBody w-[12%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Id shipper</div>}
            <div className={`tbBody ${props.type === 'success' ? 'w-[30%]' : 'w-2/4'} h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold`}>Info</div>

            {props.type === 'success' ?
                <>
                    <div className="tbBody w-[5%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Costs</div>
                    <div className="tbBody w-[10%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Date buy</div>
                    <div className="tbBody w-[10%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Total</div>
                </> : <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Note</div>}
            <div className="tbBody w-[5%] h-full flex items-center justify-center text-white font-semibold">Action</div>
        </div>
        {(props.type === 'success' ? orderSuccess : orderFail)?.map(e => <div className="tbHead w-full h-auto flex flex-wrap justify-around border bg-slate-500 border-black border-solid">
            <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">{props.type === 'success' ? e.idBill : e.idFail}</div>
            <div className={`tbBody ${props.type === 'success' ? 'w-[13%]' : 'w-[15%]'} h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold`}>{e.idUser}</div>
            {props.type === 'success' && <div className="tbBody w-[12%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">{e.idShipper}</div>}
            <div className={`tbBody ${props.type === 'success' ? 'w-[30%]' : 'w-2/4'} h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold`}>{e.infoOrder}</div>

            {props.type === 'success' ? <>
                <div className="tbBody w-[5%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">{e.costs}</div>
                <div className="tbBody w-[10%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">{e.dateBuy}</div>
                <div className="tbBody w-[10%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">{e.total}</div>
            </> : <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">{e.note === null ? '' : e.note}</div>}
            <div className="tbBody w-[5%] h-full flex items-center justify-center text-white font-semibold">
                <button onClick={() => { setBillDetail(!billDetail); setIdDetail(props.type === 'success' ? e.idBill : e.idFail) }} className="w-[50px] h-[20px] rounded-lg flex justify-center items-center bg-blue-500 ">
                    <FaEye />
                </button>
            </div>
        </div>)}
        {billDetail && <BillDetail props={{ id: idDetail, type: props.type, setBillDetail }} />}
    </div>
}
export default Bill;
