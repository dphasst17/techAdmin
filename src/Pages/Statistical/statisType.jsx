import { useGetData } from "~/hooks/useSelectData";
import PercentSold from "./percentSold";
import PercentRevenue from "./percentRenevue";

const Type = () => {
    const { dataResult, err } = useGetData('sta', 'type');
    return <div className="revenue-type w-full h-auto flex flex-wrap justify-center sm:justify-between lg:justify-start">
        {dataResult !== null && dataResult.map(e => <div className="r-t-detail w-[300px] h-[350px] flex flex-col m-4 bg-slate-500 rounded-lg" key={`${e.idType}-${e.nameType}`}>
            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-[10%] h-full">ID</span>
                <span className="w-[15%] h-full flex justify-center items-center">{e.idType}</span>
            </div>
            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Name type</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.nameType}</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Quantity product</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.count} product</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Min price</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.min} USD</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Medium price</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.medium.toFixed(0)} USD</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Max price</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.max} USD</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Total view</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.totalView}</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Product sold</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.soldProduct}</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Percent Sold</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.percentSold} %</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Total price</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.totalPrice} USD</span>
            </div>

            <div className="showDetail w-full h-[9%] flex justify-between text-white font-bold px-2">
                <span className="w-2/4 h-full">Percent revenue</span>
                <span className="w-[30%] h-full flex justify-start items-center">{e.percentRevenue} %</span>
            </div>



        </div>)}
        <PercentSold data={dataResult} />
        <PercentRevenue data={dataResult} />
    </div>
}
export default Type;