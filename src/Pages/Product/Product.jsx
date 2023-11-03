import { useContext, useEffect, useState } from "react";
import { StateContext } from "~/context/stateContext";

const LayoutProduct = ({props}) => {
    useEffect(() => {
        numSlice = props.activePage * 24
    },[props.activePage])
    let numSlice = props.activePage * 24;
    return <div className={`p-items  w-screen sm:w-full h-auto  ${props.dataResult !== null && 'lg:min-h-[800px]'} flex flex-wrap justify-around xl:justify-center items-start z-10`}>
            {props.dataResult !== null && props.dataResult?.slice(numSlice-24,numSlice).map(e => <div key={e.idProduct} className="w-[300px] ssm:w-[250px] sm:w-[270px] md:w-[350px] lg:w-[390px] min-w-[200px] h-[120px] flex justify-around md:mx-2 my-3 bg-slate-500 hover:bg-slate-400 transition-all rounded-[10px]">
                <div onClick={() => {props.handleDetailData({idType:e.idType,idProduct:e.idProduct})}} className="p-imgProduct w-2/5 h-full flex items-center justify-center cursor-pointer"><img className="w-4/5 h-4/5 object-contain" src={e.imgProduct} /></div>
                <div className="p-detail w-[55%] h-full flex flex-col justify-around">
                    <div onClick={() => {props.handleSetList(e.idProduct)}} className="inputDel w-full h-[15%] flex justify-end ">
                        <input className="h-full checked:bg-gray-500 checked:from-gray-900 checked:to-slate-800" type="checkbox" />
                    </div>
                    <div className="p-detail-title w-full h-1/5 px-2 flex justify-center text-white text-[15px] font-semibold"><span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.nameProduct}</span></div>
                    <div className="p-detail-price w-full h-1/5 px-2 text-white">Price: <span className="text-[15px] font-semibold">{e.price}</span> USD</div>
                    <div className="p-detail-btn w-full h-[40%] flex justify-around items-center">
                        <button onClick={() => {props.handleDetailData({idType:e.idType,idProduct:e.idProduct})}} className="w-2/5 h-2/4 bg-zinc-600 hover:bg-zinc-200 font-semibold text-white hover:text-black transition-all rounded-[5px]">Detail</button>
                        <button className="w-2/5 h-2/4 bg-zinc-600 hover:bg-zinc-200 font-semibold text-white hover:text-black transition-all rounded-[5px]">Delete</button>
                    </div>
                </div>
            </div>)}
        </div>
}
export default LayoutProduct