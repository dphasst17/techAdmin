import { useContext, useEffect, useState } from "react";
import LoadingUi from "~/common/Loading";
import addIcons from "~/image/plusAdd.png";
import deleteIcon from "~/image/delete3.png";
import { StateContext } from "~/context/stateContext";
import { useGetData} from "~/hooks/useSelectData";
import DetailProduct from "~/common/detail/detailProduct";
import useList from "~/hooks/useList";
import useSetDetailData from "~/hooks/useDetailData";
import {FormAddNew} from "./FormAddNew";
import PaginationPage from "~/helper/handlePagination";
import Pagination from "~/common/Pagination";
import LayoutProduct from "./Product";
import { FormUpdate } from "./FormUpdate";
import ErrorPage from "~/common/ErrorPage";
import AddImg from "./AddImg";
function Product() {
    const [data,setData] = useState(null);
    const {isLoading,showDetail,setShowDetail} = useContext(StateContext);
    const [activePage,setActivePage] = useState(1)
    const [delBtn,setDelBtn] = useState(false);
    const [update,setUpdate] = useState(false);
    const [addNew,setAddNew] = useState(false);
    const [addImg,setAddImg] = useState(false);
    const [dataUpdate,setDataUpdate] = useState();
    const { dataResult, error } = useGetData('product','getProduct');
    const {list,handleSetList} = useList();
    const {dataDetail,handleDetailData} = useSetDetailData();
    useEffect(() => {
        setData(dataResult)
    },[dataResult])
    useEffect(() => {
        setDelBtn(list.length !== 0 ? true:false);
    },[list])
    const HandleDelProduct = () => {
        console.log(list)
    }
    PaginationPage(dataResult?.length,24);
    return <div className="p-container w-screen sm:w-full h-auto flex flex-col pt-2 pr-0 sm:px-2 z-10">
        {isLoading === true && <LoadingUi />}
        {data !== null && <div className="w-full h-[50px] flex items-center">
            <div onClick={() => {setAddNew(true)}} className="addBtn w-[50px] h-[50px] active:scale-75 transition-all cursor-pointer">
                <img src={addIcons} className="w-full h-full object-contain" alt="this is add icon"/>
            </div>
            <div onClick={() => {setAddImg(!addImg)}} className="addImgProduct w-[100px] h-4/5 mx-2 flex justify-center items-center rounded-lg bg-slate-500 text-slate-100 font-semibold cursor-pointer">ADD IMAGE</div>
            {delBtn && <div onClick={HandleDelProduct} 
                className="delBtn animate-showDiv w-[50px] h-[50px] active:scale-75 transition-all cursor-pointer"
                >
                    <img src={deleteIcon} className="w-full h-full object-contain" alt="this is add icon"/>
                </div>
            }
        </div>}
        {error === null && <ErrorPage />}
        <LayoutProduct props={{dataResult,activePage,handleDetailData,handleSetList}}/>
        {addImg === true && <AddImg props={{data,setAddImg}}/>}
        {dataResult !== null && <Pagination props={{data:dataResult,totalItems:24,class:'product',activePage,setActivePage}}/>}
        {addNew === true && <FormAddNew props={{setAddNew}}/>}
        {showDetail && <DetailProduct props={{dataDetail,setUpdate,setDataUpdate}} />}
        {update === true && <FormUpdate props={{dataUpdate,setUpdate}}/>}
    </div>;
}

export default Product;