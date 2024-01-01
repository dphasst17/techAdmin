import { useContext, useEffect, useState } from "react";
import { StateContext } from "~/context/stateContext";
import { useGetDataByKey } from "~/hooks/useSelectData";
import closeIcon from "~/image/close.png"
const DetailProduct = ({ props }) => {
    const { setShowDetail } = useContext(StateContext);
    let key = { idType: props.dataDetail.nameType, idProduct: props.dataDetail.idProduct }
    const { data, err } = useGetDataByKey('product', 'getProductDetail', key);

    const [img, setImg] = useState(null);
    useEffect(() => {
        data !== null && setImg(data.flatMap(e => e.imgProduct.filter(i => i.type === "default").map(i => i.img)).toString())
    }, [data, setImg])
    let productKey = ['nameProduct', 'price', 'imgProduct', 'des', 'dateAdded', 'view', 'idType', 'nameType', 'brand', 'idProduct', 'discount'];
    return <div className="p-detailItem lg:w-[88vw] w-full h-screen flex items-center justify-center fixed z-50 top-0 ">
        <div onClick={() => { setShowDetail(false) }} className="p-detailItem-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        {data !== null && data.map(e => <div key={`detail-${e.idProduct}`}
            className="p-detailItem-show w-full lg:w-4/5 h-full lg:h-[95%] p-2 flex flex-col lg:flex-row items-center justify-around rounded-[10px] 
            bg-slate-600 z-40 m-auto overflow-scroll lg:overflow-hidden translate-x-[-50%,50%]">
            <div className="p-detailItem-imgProduct w-full lg:w-1/5 h-[15%] lg:h-full min-h-[100px] flex flex-col items-center justify-center">
                <img className="w-4/5 h-full lg:h-2/4 object-contain" src={img !== null ? img : undefined} alt="imgProduct" />
                <div className="subImg w-full h-auto min-h-[50px] flex flex-wrap justify-center items-center">
                    {e.imgProduct.map(i => <img onClick={() => { setImg(i.img.toString()) }}
                        className={`my-2 w-[100px] h-[50px] ${img?.includes(i.img) && "border-solid border-white border-[2px] transition-all rounded-[5px]"} object-contain`} src={i.img} alt="subImg" />)}
                </div>
            </div>
            <div className="p-detailItem-info w-full lg:w-4/5 h-auto lg:h-full text-[20px] font-semibold text-white flex flex-wrap sm:justify-evenly pr-2">
                <div className="title w-full text-[30px] text-center">{e.nameProduct}</div>
                <div className="des w-full h-auto text-[12px] lg:text-[20px]">Description: {e.des}</div>

                <div className="info w-[90%] lg:w-2/5 h-1/4 lg:h-2/4 flex flex-wrap flex-row lg:flex-nowrap lg:flex-col rounded-lg bg-slate-100 px-2">
                    <div className="type w-2/4 lg:w-full min-w-[150px] h-auto lg:h-[15%] my-2 flex justify-start items-center rounded-lg text-black cursor-pointer transition-all hover:bg-blue-400 hover:text-white">{e.nameType.toUpperCase()}</div>
                    <div className="brand w-2/4 lg:w-full min-w-[150px] h-auto lg:h-[15%] my-2 flex justify-start items-center rounded-lg text-black cursor-pointer transition-all hover:bg-blue-400 hover:text-white">{e.brand.toUpperCase()}</div>
                    <div className="price w-2/4 lg:w-full min-w-[200px] h-auto lg:h-[15%] my-2 flex justify-start items-center rounded-lg text-black cursor-pointer transition-all hover:bg-blue-400 hover:text-white">Price: {e.price} USD</div>
                    <div className="dateAdded w-2/4 lg:w-full min-w-[250px] h-auto lg:h-[15%] my-2 flex justify-start items-center rounded-lg text-black cursor-pointer transition-all hover:bg-blue-400 hover:text-white">Date added: {new Date(e.dateAdded).toLocaleDateString()}</div>
                    <div className="discount w-2/4 lg:w-full min-w-[150px] h-auto lg:h-[15%] my-2 flex justify-start items-center rounded-lg text-black cursor-pointer transition-all hover:bg-blue-400 hover:text-white">Discount: {e.discount}%</div>
                    <div className="view w-2/4 lg:w-full min-w-[150px] h-auto lg:h-[15%] my-2 flex justify-start items-center rounded-lg text-black cursor-pointer transition-all hover:bg-blue-400 hover:text-white">View: {e.view}</div>
                </div>

                <div className="infoDetail w-[90%] lg:w-2/5 h-auto lg:h-2/4 rounded-lg flex flex-wrap flex-row lg:flex-nowrap lg:flex-col justify-start bg-slate-100 my-2 lg:my-0 px-2">
                    {e.detail.map((detailItem) =>
                        Object.keys(detailItem)
                            .filter(key => !productKey.includes(key))
                            .map(key => (
                                <div className="w-2/4 lg:w-full h-auto lg:h-[20%] my-2 flex justify-start items-center rounded-lg text-black cursor-pointer transition-all hover:bg-blue-400 hover:text-white" key={key}>
                                    <span className="overflow-hidden whitespace-nowrap text-ellipsis px-2">{`${key.toUpperCase()} : ${detailItem[key]}`}</span>
                                </div>
                            ))
                    )}
                </div>
                <div className="btnDetail w-full h-1/5 flex justify-around my-6 xl:my-4">
                    <button onClick={() => { setShowDetail(false); props.setUpdate(true); props.setDataUpdate(key) }} className="w-2/5 h-[50px] bg-blue-800 hover:bg-blue-600 transition-all mr-4 rounded-[10px]">
                        Update
                    </button>
                </div>
            </div>
            <div onClick={() => { setShowDetail(false) }} className="closeBtn absolute w-[70px] h-[60px] rounded-[10px] cursor-pointer flex items-center justify-center top-5 left-2">
                <img src={closeIcon} className="w-full h-full object-contain" alt="close-icon" />
            </div>
        </div>
        )}
    </div>
}
export default DetailProduct