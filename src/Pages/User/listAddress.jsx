import { useContext} from "react"
import ErrorPage from "~/common/ErrorPage";
import { StateContext } from "~/context/stateContext"

const ListAddress = () => {
    const {dataAddress,errAddress,dark} = useContext(StateContext);
    return <>
        {dataAddress !== null && <div className="all w-full lg:w-[95%] h-auto flex flex-col items-center cursor-pointer my-4">
            <div className="titleTable w-[98%] h-[50px] bg-slate-800 rounded-lg flex justify-between">
                <span className="w-[10%] h-full flex items-center justify-center text-white text-center font-semibold">IdUser</span>
                <span className="w-[10%] h-full flex items-center justify-center text-white text-center font-semibold">Type</span>
                <span className="w-4/5 h-full flex items-center justify-center text-white text-center font-semibold">Detail</span>
            </div>
            <div className="contentTable w-full h-auto flex flex-wrap justify-center">
                {dataAddress.map(e =>
                    <div className={`detail w-[98%] h-auto min-h-[30px] flex my-2 border-solid border-[1px] border-slate-500 ${dark === true ? 'bg-transparent' : ' bg-slate-500'} rounded-lg`}>
                        <div className="w-[10%] h-auto flex items-center justify-center text-white text-center font-semibold">
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.idUser}</span>
                        </div>
                        <div className={`w-[10%] h-full flex items-center justify-center ${e.typeAddress === "default" ? 'text-blue-400':'text-white'} text-center font-semibold`}>
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.typeAddress}</span>
                        </div>
                        <div className="w-4/5 h-full flex items-center justify-start text-white text-center font-semibold">
                            {e.detail}
                        </div>
                    </div>
                )}
            </div>
        </div>}
        {errAddress !== null && <ErrorPage />}
    </>
}
export default ListAddress