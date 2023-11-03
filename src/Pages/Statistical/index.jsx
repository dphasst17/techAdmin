import { useGetData } from "~/hooks/useSelectData"
import Type from "./statisType"
import View from "./statisView"
import Selling from "./statisSelling"
import { useContext } from "react"
import { StateContext } from "~/context/stateContext"
import RevenueMonth from "./chartRevenueMonth"

const Statistical = () => {
    const{dark} = useContext(StateContext)
    const {dataResult,err} = useGetData('sta','total')
    return <div className="statistical w-screen lg:w-full h-auto">
        <h1 className={`text-[30px] text-center ${dark === true ? 'text-slate-100':'text-slate-800'} font-bold my-2`}>BEST SELLING</h1>
        <Selling />
        <h1 className={`text-[30px] text-center ${dark === true ? 'text-slate-100':'text-slate-800'} font-bold my-2`}>MOST VIEW</h1>
        <View />
        <div className="totalRevenue w-full h-[80px] flex items-center pl-4">
            {dataResult!==null && dataResult.map(e => <div className="w-[250px] h-[50px] flex flex-col bg-slate-500 text-white font-bold  pl-2 rounded-lg">
                <span>Total product sold: {Number(e.sold)}</span>
                <span>Total revenue: {e.revenue} USD</span>
            </div>)}
        </div>
        <Type />
        <RevenueMonth />
    </div>
}
export default Statistical