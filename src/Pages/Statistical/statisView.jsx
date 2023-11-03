import { useGetData } from "~/hooks/useSelectData"

const View = () => {
    const {dataResult:data,err} = useGetData('sta','view');
    
    
    return <div className="view w-full h-auto flex flex-wrap justify-around my-8">
        {data !== null && data.slice(0,5).map(e => <div className="view-detail w-[250px] h-[300px] bg-slate-500 rounded-lg my-2">
            <div className="view-imgProduct w-full h-2/5 flex justify-center"><img className="w-full h-full object-contain" src={e.imgProduct} /></div>
            <div className="view-titleProduct w-full h-1/5 flex items-center justify-center font-semibold text-white">{e.nameProduct}</div>
            <div className="view-moreProduct w-full h-1/5 flex justify-around items-center">
                <div className="w-2/5 h-2/4 bg-blue-300 rounded-lg flex items-center justify-center font-semibold">{e.nameType.toUpperCase()}</div>
                <div className="w-2/5 h-2/4 bg-blue-300 rounded-lg flex items-center justify-center font-semibold">{e.brand.toUpperCase()}</div>
            </div>
            <div className="view-priceProduct w-full h-[10%] pl-2 font-semibold text-slate-200">Price: {e.price} USD</div>
            <div className="view-viewProduct w-full h-[10%] pl-2 font-semibold text-slate-200">View: {e.view}</div>
        </div>)}
    </div>
}
export default View