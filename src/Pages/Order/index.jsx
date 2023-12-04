import { useContext, useEffect, useState } from "react";
import LoadingUi from "~/common/Loading";
import { StateContext } from "~/context/stateContext";
import detailOrderIcon from "~/image/detailOrder.png";

import addressIcon from "~/image/address.png";
import phoneIcon from "~/image/phone.png";
import costsIcon from "~/image/costsTrans.png";
import nameIcon from "~/image/name.png";
import idUserIcon from "~/image/profile.png";
import methodPay from "~/image/methodPay.png";
import methodDirect from "~/image/methodDirect.png";
import DetailTrans from "~/common/detail/detailTrans";
import ErrorPage from "~/common/ErrorPage";
const Order = () => {
    const {dataOrder,errOrder} = useContext(StateContext)
    const { showDetail, setShowDetail } = useContext(StateContext);
    const [id, setId] = useState("")
    const { isLoading } = useContext(StateContext)
    return <div className="o-container w-full h-auto min-h-screen">
        {isLoading && <LoadingUi />}
        <div className="order-detail w-full h-auto min-h-screen lg:h-full flex flex-wrap justify-center lg:justify-between px-8">
            {dataOrder !== null && dataOrder.map(e => <div className="order-content lg:w-[48%] 2xl:w-[48%] min-w-[300px] h-auto lg:max-h-[350px] min-h-[100px] 
                    bg-slate-500 flex flex-wrap justify-center rounded-[10px] my-8" key={e.idTrans}>
                <h1 className="text-[20px] text-white font-bold">INFORMATION ORDER</h1>
                <div className="items w-full h-auto flex flex-wrap justify-between p-2 rounded-[10px] mx-4 my-2">
                    <span className="w-[48%] h-[40px] text-[15px] text-black font-semibold bg-white rounded-[5px] flex items-center justify-center my-2 cursor-pointer">
                        <img className="w-[50px] h-3/5 object-contain" src={idUserIcon} alt="orderDetail" />
                        {e.idUser}
                    </span>
                    <span className="w-[48%] h-[40px] text-[15px] text-black font-semibold bg-white rounded-[5px] flex items-center justify-center my-2 cursor-pointer">
                        <img className="w-[50px] h-3/5 object-contain" src={nameIcon} alt="orderDetail" />
                        {e.fullName}
                    </span>
                    <span className="w-[48%] h-[40px] text-[15px] text-black font-semibold bg-white rounded-[5px] flex items-center justify-center my-2 cursor-pointer">
                        <img className="w-[50px] h-3/5 object-contain" src={phoneIcon} alt="orderDetail" />
                        {e.phone}
                    </span>
                    <span className="w-[48%] h-[40px] text-[15px] text-black font-semibold bg-white rounded-[5px] flex items-center justify-center my-2 cursor-pointer">
                        <img className="w-[50px] h-3/5 object-contain" src={costsIcon} alt="orderDetail" />
                        {e.costs}
                    </span>
                    <span className="w-full h-[40px] text-[15px] text-black font-semibold bg-white rounded-[5px] flex items-center justify-center my-2 cursor-pointer">
                        <img className="w-[50px] h-3/5 object-contain" src={methodPay} alt="orderDetail" />
                        -
                        <img className="w-[50px] h-3/5 object-contain" src={methodDirect} alt="orderDetail" />
                        {e.method}
                    </span>
                    <span className="w-full min-w-[200px] h-auto min-h-[40px] text-[15px] text-black font-semibold bg-white rounded-[5px] flex items-center justify-center my-2 cursor-pointer">
                        <img className="w-[50px] h-3/5 object-contain" src={addressIcon} alt="orderDetail" />
                        {e.address}
                    </span>
                </div>
                <div className="btnDetail w-[80vw] sm:w-[50vw] md:w-2/4 h-[50px] mb-4">
                    <button onClick={() => { setShowDetail(true); setId(e.idTrans) }} className="w-full h-full flex justify-center items-center bg-white rounded-[10px] text-[20px] font-semibold">
                        <img className="w-[50px] h-3/5 object-contain" src={detailOrderIcon} alt="orderDetail" />
                        Detail
                    </button>
                </div>
            </div>
            )}
            {errOrder !== null && <ErrorPage />}
        </div>
        {showDetail && <DetailTrans props={{ id }} />}
    </div>
}
export default Order;