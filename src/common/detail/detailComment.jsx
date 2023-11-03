import { useEffect } from "react";
import { useGetDataByKey } from "~/hooks/useSelectData"
import closeIcon from "~/image/close.png";
import deleteIcon from "~/image/delete2.png"
const ShowAllComment = ({props}) => {
    const {data,err:errDetail} = useGetDataByKey('comment','commentGetByProduct',props.idP);
    return <div className="c-detail w-screen h-screen flex items-center justify-center fixed z-50 top-0 ">
        <div onClick={() => { props.setShowAll(false) }} className="formProduct-overlay w-full h-full absolute opacity-50 bg-black z-20"></div>
        <div onClick={() => { props.setShowAll(false) }} className="closeBtn absolute w-[60px] h-[50px]
             cursor-pointer flex items-center justify-center top-5 left-2 z-50">
            <img src={closeIcon} className="w-full h-full object-contain" alt="close-icon"/>
        </div>
        {data !== null && data.map(e => <div className="c-detailItem-show w-full md:w-4/5 h-full lg:h-4/5 p-2 flex flex-col lg:flex-row items-center justify-around 
                rounded-[10px] bg-slate-600 z-40 overflow-scroll lg:overflow-hidden">
                <div className="w-1/5 h-full flex flex-col justify-center items-center">
                    <img src={e.imgProduct} className="w-full h-2/5 object-contain" alt="imgProduct"/>
                    <p className="w-full h-1/5 text-white text-center text-[20px] font-semibold">{e.nameProduct}</p>
                </div>
                <div className="w-4/5 h-full overflow-auto">
                    {e.detail.map(d => <div className="w-full h-[15%] flex justify-evenly items-center">
                        <span className="w-1/5 text-white text-[15px] font-bold">id: {d.idUser}</span>
                        <span className="w-1/5 text-white text-[15px] font-bold">date: {d.dateComment}</span>
                        <span className="w-2/5 text-white text-[15px] font-bold">{d.commentValue}</span>
                        <button className="w-1/5 h-full flex items-center justify-center">
                            <img src={deleteIcon} className="w-[30px] h-[30px] object-contain" alt="deleteIcon"/>
                        </button>
                    </div>)}
                </div>
        </div>)}
    </div>
}
export default ShowAllComment;