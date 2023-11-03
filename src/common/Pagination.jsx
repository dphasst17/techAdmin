import { useContext} from "react";
import { StateContext } from "~/context/stateContext";
import PaginationPage from "~/helper/handlePagination";
import nextIcon from "~/image/next.png"
import roundedIcon from "~/image/rounded.png";
import roundedSecond from "~/image/rounded2.png"
const Pagination = ({props}) => {
    const {isShowPaging} = useContext(StateContext)
    const {numberPage} = PaginationPage(props.data?.length,props.totalItems)
    return <div className={`paging-${props.class}-container w-full h-[100px] flex justify-evenly items-center`}>
        {isShowPaging === true && <div onClick={() => {props.activePage > 1 && props.setActivePage(props.activePage - 1)}} className="w-[100px] h-[50px] active:scale-75 transition-all">
            <img className="w-full h-full object-contain cursor-pointer scale-x-[-1]" src={nextIcon} />
        </div>}
        <div className="w-auto h-full flex justify-around items-center">
            {props.activePage !== 1 && <>
                    <button 
                        style={{backgroundImage:`url(${roundedSecond})`,backgroundSize:'100% 100%',transition:'background-image .5s linear'}} 
                        className="w-[40px] h-[40px] mx-8 rounded-[15%] active:scale-75 transition-all text-white font-semibold"
                        onClick={() => {props.setActivePage(1)}}
                    >
                        1
                    </button>
                    <span className="w-[35px] h-[35px] rounded-lg bg-slate-100 flex items-center justify-center text-[20px]">...</span>
                </>
            }
            
            {numberPage && numberPage.map(e => 
                <button style={{backgroundImage:`url(${e === (props.activePage) ? roundedIcon : roundedSecond})`,backgroundSize:'100% 100%',transition:'background-image .5s linear'}} 
                    onClick={() => {props.setActivePage(e)}} className={`${e === props.activePage? 'block' : 'hidden'} w-[40px] h-[40px] mx-8 rounded-[15%] active:scale-75 transition-all text-white font-semibold`} key={e}>
                    {e}
                </button>
            )}
            {props.activePage !== numberPage?.length && <>
                    <span className="w-[35px] h-[35px] rounded-lg bg-slate-100 flex items-center justify-center text-[20px]">...</span>
                    <button 
                        style={{backgroundImage:`url(${roundedSecond})`,backgroundSize:'100% 100%',transition:'background-image .5s linear'}} 
                        className="w-[40px] h-[40px] mx-8 rounded-[15%] active:scale-75 transition-all text-white font-semibold"
                        onClick={() => {props.setActivePage(numberPage.length)}}
                    >
                        {numberPage?.length}
                    </button>
                </>
            }
        </div>
        {isShowPaging === true && <div onClick={() => {props.activePage < numberPage?.length && props.setActivePage(props.activePage + 1)}} className="w-[100px] h-[50px] active:scale-75 transition-all"><img className="w-full h-full object-contain cursor-pointer" src={nextIcon} /></div>}
    </div>
}
export default Pagination;