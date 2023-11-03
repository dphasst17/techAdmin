import { useContext, useEffect, useState } from "react"
import Pagination from "~/common/Pagination"
import { StateContext } from "~/context/stateContext"
import PaginationPage from "~/helper/handlePagination"
import { useGetData } from "~/hooks/useSelectData"

const Diary = () => {
    const [dataTotal,setDataTotal] = useState(null)
    const {dataResult,err} = useGetData('ware','getTotalProduct');
    const [activePage,setActivePage] = useState(1)
    const {dark} = useContext(StateContext);
    useEffect(() => {
        dataResult !== null && setDataTotal(dataResult)
    },[dataResult])
    useEffect(() => {
        numSlice = activePage * 10
    },[activePage])
    let numSlice = activePage * 10;
    return <>
        <h1 className={`text-[30px] text-center font-bold ${dark === true ? 'text-white' : 'text-slate-700'} my-4`}>Total Product</h1>
        <div className="diary w-full h-auto flex flex-wrap justify-evenly">
            <div className="titleTable w-full xl:w-4/5 h-[50px] bg-slate-600 rounded-lg flex ">
                <span className="w-1/5 h-full flex items-center justify-center text-[18px] text-white font-semibold">Image</span>
                <span className="w-2/5 h-full flex items-center justify-center text-[18px] text-white font-semibold">Name product</span>
                <span className="w-1/5 h-full flex items-center justify-center text-[18px] text-white font-semibold">Price</span>
                <span className="w-1/5 h-full flex items-center justify-center text-[18px] text-white font-semibold">Total</span>
            </div>
            {dataTotal !== null && dataTotal.slice(numSlice-10,numSlice).map(e => <div className="w-full xl:w-4/5 h-[80px] flex bg-slate-300 rounded-lg my-2" key={e.idProduct}>
                <span className="w-1/5 h-full flex items-center justify-center text-[18px] text-slate-700 font-semibold">
                    <img className="w-full h-full object-contain" src={e.imgProduct} />
                </span>
                <span className="w-2/5 h-full flex items-center text-[18px] text-slate-700 font-semibold overflow-hidden whitespace-nowrap text-ellipsis"><span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.nameProduct}</span></span>
                <span className="w-1/5 h-full flex items-center justify-center text-[18px] text-slate-700 font-semibold">{e.price}</span>
                <span className="w-1/5 h-full flex items-center justify-center text-[18px] text-slate-700 font-semibold">{e.totalProduct}</span>
            </div>)}
        </div>
        {dataTotal !== null && <Pagination props={{data:dataTotal,totalItems:10,activePage,class:'total',setActivePage}}/>}
    </>
}
export default Diary