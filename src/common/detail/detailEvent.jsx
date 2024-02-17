import { useGetDataByKey } from "~/hooks/useSelectData";

const EventDetail = ({props}) => {
    const { data, err } = useGetDataByKey('product', 'getSaleEventDetail', props.idDetail);
    return <div className="p-detailItem w-full h-screen flex items-center justify-center fixed z-50 top-0 left-0 ">
        <div onClick={() => { props.setDetailEvent(false) }} className="p-detailItem-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        <div className="t-detailItem-show w-full lg:w-4/5 h-full lg:h-4/5 p-2 flex flex-col contents-center justify-start rounded-[10px] bg-slate-600 z-40 overflow-x-hidden overflow-y-scroll">
            <h1 className="w-full text-[30px] flex justify-center text-white font-bold">List Product on sale event</h1>
            <table className="w-full h-[50vh] mt-8 relative">
                <tr>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t border-l">Id</th>
                    <th className="text-white w-[30%] border-solid border-slate-300 border-r border-b border-t">Name</th>
                    <th className="text-white w-[20%] h-auto border-solid border-slate-300 border-r border-b border-t">Images</th>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t">Brand</th>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t">Type</th>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t">Price</th>
                    <th className="text-white w-[10%] border-solid border-slate-300 border-r border-b border-t">Discount</th>
                </tr>
                {data !== null && data.data.map(e => <tr key={e.id}>
                    <td className="text-white border-solid border-slate-300 border-b">{e.idProduct}</td>
                    <td className="text-white border-solid border-slate-300 border-b text-left">{e.nameProduct}</td>
                    <td className="text-white w-[20%] border-solid border-slate-300 border-b"><img src={e.imgProduct} className="w-[60px] h-[50px] object-contain"/></td>
                    <td className="text-white border-solid border-slate-300 border-b">{e.brand}</td>
                    <td className="text-white border-solid border-slate-300 border-b">{e.nameType}</td>
                    <td className="text-white border-solid border-slate-300 border-b">{e.price} USD</td>
                    <td className="text-white border-solid border-slate-300 border-b">{e.discount} %</td>
                </tr>)}
                {err!== null && <div>NOT FOUND</div>}
            </table>
        </div>
    </div>
}
export default EventDetail