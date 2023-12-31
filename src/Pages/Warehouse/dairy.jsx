import { useContext, useEffect, useState } from "react"
import Pagination from "~/common/Pagination"
import { StateContext } from "~/context/stateContext"

const Diary = () => {
    const [activePageDiary, setActivePage] = useState(1)
    const { dark,dataDiary } = useContext(StateContext);
    useEffect(() => {
        numSlice = activePageDiary * 14
    }, [activePageDiary])
    let numSlice = activePageDiary * 14;
    return <>
        <h1 className={`text-[30px] text-center font-bold ${dark === true ? 'text-white' : 'text-slate-700'} my-4`}>Warehouse Diary</h1>
        <div className="diary w-full h-auto flex flex-wrap justify-evenly">
            <div className="titleTable w-full xl:w-4/5 h-auto min-h-[50px] md:h-[50px] bg-slate-600 rounded-lg flex flex-wrap justify-center items-center">
                <span className="w-4/5 md:w-2/5 h-[50px] md:h-full flex items-center justify-center text-[18px] text-white font-semibold">Name product</span>
                <span className="w-1/4 md:w-[15%] h-[50px] md:h-full flex items-center justify-center text-[18px] text-white font-semibold">Person</span>
                <span className="w-1/4 md:w-[15%] h-[50px] md:h-full flex items-center justify-center text-[18px] text-white font-semibold">Date</span>
                <span className="w-1/4 md:w-[15%] h-[50px] md:h-full flex items-center justify-center text-[18px] text-white font-semibold">Count</span>
                <span className="w-1/4 md:w-[15%] h-[50px] md:h-full flex items-center justify-center text-[18px] text-white font-semibold">Status</span>
            </div>
            {dataDiary !== null && dataDiary.slice(numSlice - 14, numSlice).map(e => <div className="w-full xl:w-4/5 h-auto min-h-[50px] md:h-[50px] flex flex-wrap justify-center items-center bg-slate-300 rounded-lg my-2" key={e.id}>
                <span className="w-4/5 md:w-2/5 h-[50px] md:h-full flex items-center justify-center text-[18px] text-slate-700 font-semibold overflow-hidden whitespace-nowrap text-ellipsis"><span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.nameProduct}</span></span>
                <span className="w-1/4 min-w-[100px] md:w-[15%] h-[50px] md:h-full flex items-center justify-center text-[18px] text-slate-700 font-semibold">{e.idpersonIOX}</span>
                <span className="w-1/4 min-w-[100px] md:w-[15%] h-[50px] md:h-full flex items-center text-[18px] text-slate-700 font-semibold overflow-hidden whitespace-nowrap text-ellipsis"><span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.dateIOX}</span></span>
                <span className="w-1/4 min-w-[100px] md:w-[15%] h-[50px] md:h-full flex items-center justify-center text-[18px] text-slate-700 font-semibold">{e.countProduct}</span>
                <span className="w-1/4 min-w-[100px] md:w-[15%] h-[50px] md:h-full flex items-center justify-center text-[18px] text-slate-700 font-semibold">{e.statusWare}</span>
            </div>)}
        </div>
        {dataDiary !== null && <Pagination props={{ data: dataDiary, totalItems: 14, activePage: activePageDiary, class: 'diary', setActivePage }} />}
    </>
}
export default Diary