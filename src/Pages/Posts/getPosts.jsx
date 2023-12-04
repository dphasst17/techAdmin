import { useContext } from "react";
import { StateContext } from "~/context/stateContext";
import { useGetData } from "~/hooks/useSelectData"

const GetPosts = () => {
    const {dataPost:dataResult,errPost} = useContext(StateContext)
    return <div className="showPosts w-full h-auto flex flex-wrap justify-evenly px-4 my-2">
        {dataResult !== null && dataResult.slice(0, 4).map(e => <div
            onClick={() => { navigate(`/posts/detail/${e.idPosts}/${e.title}`) }}
            className="w-full md:w-2/5 lg:w-[350px] h-[250px] lg:h-[400px] flex items-end bg-slate-100 rounded-lg cursor-pointer mx-4 my-2" key={e.idPosts}
            style={{
                backgroundImage: `url(${e.banner})`,
                backgroundRepeat: "repeat-y",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="infoPosts w-full h-full relative flex flex-wrap justify-center">
                <div className="postOverlay w-full h-full absolute z-0 bg-slate-900 opacity-40"></div>
                <span className="w-full h-3/5 flex justify-center items-center text-[30px] font-bold text-slate-100 z-10 px-2">{e.title}</span>
                <span className="w-2/5 h-[10%] rounded-lg bg-slate-600 text-[18px] text-white font-bold flex items-center justify-center z-10 mx-2">{e.dateAdded}</span>
                <span className="w-2/5 h-[10%] flex justify-center items-center  bg-slate-600 text-[18px] text-white rounded-lg font-semibold z-10 mx-2">{e.poster}</span>
            </div>
        </div>)}
    </div>
}
export default GetPosts