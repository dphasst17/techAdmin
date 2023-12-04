
import { useContext, useEffect, useState } from "react";
import ErrorPage from "~/common/ErrorPage";
import LoadingUi from "~/common/Loading";
import ShowAllComment from "~/common/detail/detailComment.jsx";
import { StateContext } from "~/context/stateContext";
import moreIcon from "~/image/more.png"
const Comment = () => {
    const {dataComment,errComment} = useContext(StateContext);
    const [idP, setIdP] = useState("");
    const [showAll, setShowAll] = useState(false)
    const { isLoading, dark } = useContext(StateContext)
    return <div className="comment-container w-screen sm:w-full h-auto pt-2 pr-0 sm:pr-8 z-10">
        {isLoading && <LoadingUi />}
        <h1 className={`text-[30px] text-center font-bold ${dark === true ? 'text-white' : 'text-slate-700'} my-4`}>Comment for each product</h1>
        <div className="c-items w-full h-auto flex flex-wrap justify-center md:justify-around items-center">
            {dataComment!==null && dataComment.map(e => <div className="w-4/5 md:w-[32%] min-w-[150px] h-[250px] flex justify-around bg-slate-500 rounded-[10px] my-2" key={e.idProduct}>
                <div className="c-image w-[25%] h-full flex flex-col items-center justify-center">
                    <img className="w-full h-2/4 object-contain" src={e.imgProduct} alt="img-product" />
                    <span className="w-full h-1/4 text-[20px] text-white font-semibold text-center overflow-hidden whitespace-nowrap text-ellipsis">{e.nameProduct}</span>
                    <span className="w-full text-[15px] text-white font-semibold text-center overflow-hidden">
                        Number of comment:<br /><span className=" text-[20px] text-blue-800">{e.detail.length}</span>
                    </span>
                </div>
                <div className="c-detail w-[75%] h-full flex flex-col">
                    {e.detail.slice(0, 4).map((d, index) => <div className="c-detail-value w-full flex justify-between" key={d.idUser + index}>
                        <span className="w-[15%] h-[50px] text-white text-[15px] font-semibold">{d.idUser}</span>
                        <span className="w-1/4 h-[50px] text-white text-[15px] font-medium"><span className="text-white text-[15px] font-semibold">{d.dateComment}</span></span>
                        <span className="w-3/5 h-[50px] text-white text-[15px] font-semibold"><span className="overflow-hidden whitespace-nowrap text-ellipsis">{d.commentValue}</span></span>
                    </div>)}
                    {e.detail.length > 4 && <div onClick={() => { setShowAll(true); setIdP(e.idProduct) }} className="btnComment w-auto h-[50px] cursor-pointer"><img className="w-[auto] h-[50px] object-contain" src={moreIcon} /></div>}
                </div>
            </div>)}
            {errComment !== null && <ErrorPage />}
            {showAll === true && <ShowAllComment props={{ idP, setShowAll }} />}
        </div>
    </div>
}
export default Comment;