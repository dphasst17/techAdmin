import { useContext, useEffect, useState } from "react";
import { StateContext } from "~/context/stateContext";
import fileUpload from "~/image/fileUpload.png";
import nextSubmit from "~/image/nextSubmit.png";
import { useForm } from "react-hook-form";
import closeIcon from "~/image/close.png";
import { useGetDataByKey } from "~/hooks/useSelectData";
import { productUpdate } from "~/api/product";
export const FormUpdate = ({ props }) => {
    const { data, err: errResult } = useGetDataByKey('product', 'getProductDetail', props.dataUpdate)
    const { dataType,stateForm, setStateForm } = useContext(StateContext);
    const [fileName, setFileName] = useState("");
    const { register: registerProduct, watch: watchForm1, handleSubmit: handleSubmitProduct, formState: { errors: err } } = useForm();
    const watchAllForm1 = watchForm1();
    const { register: registerDetail, watch: watchForm2, handleSubmit: handleSubmitDetail, formState: { errors: err1 } } = useForm();
    const watchAllForm2 = watchForm2();
    useEffect(() => {data !== null && console.log(data)},[data])
    const onSubmit = (data) => {
        Object.keys(err).length === 0 && setStateForm(prevState => ({ ...prevState, product: Object.values(data) }));
    }
    const onSubmit2 = (data) => {
        Object.keys(err1).length === 0 && setStateForm(prevState => ({ ...prevState, detail: data }));
    }
    const handleSubmitData = async (e) => {
        e.preventDefault();
        await handleSubmitProduct(onSubmit)();
        await handleSubmitDetail(onSubmit2)();
    }
    const handleChange = (event) => {
        const file = event.target.files[0];
        console.log(file ? file : data.map(e => e.imgProduct).toString())
        setFileName(file.name);
    };
    useEffect(() => {
        
        const FetchDataUpdate = async () => {
            if (stateForm.product.length !== 0 && stateForm.detail.length !== 0) {
                let newProduct = [...stateForm.product]
                let newImgUrl = fileName !== "" ? fileName : data.map(e => e.imgProduct.filter(e => e.type === "default")[0].img).toString();
                newProduct[2] = newImgUrl;
                let newStateForm = { ...stateForm, product: newProduct };
                //Post Data Update Product is here
                console.log(newStateForm)
                productUpdate(newStateForm, data !== null ? {nameType:data[0].nameType,idProduct:data[0].idProduct} : '')
                    .then(res => { res.status === 200 && window.location.reload() })
                    .catch(err => alert(err.message))
            }
        }
        FetchDataUpdate()
    }, [stateForm])
    return <div className="formProduct w-screen xl:w-[88vw] h-screen flex items-center justify-center fixed z-50 top-0 ">
        <div onClick={() => { props.setUpdate(false); setStateForm({ folder: 'product', product: [], detail: [] }) }} className="formProduct-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        <div onClick={() => { props.setUpdate(false); setStateForm({ folder: 'product', product: [], detail: [] }) }} className="closeBtn absolute w-[60px] h-[50px]
             cursor-pointer flex items-center justify-center top-5 left-2 z-50">
            <img src={closeIcon} className="w-full h-full object-contain" alt="close-icon" />
        </div>

        <div className="formDetail w-full md:w-4/5 xl:w-[800px] h-screen md:h-[95vh] bg-slate-500 z-40 flex flex-col justify-around items-center pt-12 md:pt-0 pb-5 mx-auto">
            <h1 className="text-[20px] text-white font-bold text-center">FORM UPDATE PRODUCT</h1>
            {data && data.map(e => <div className="formView w-full h-[90%] flex flex-col justify-between overflow-y-auto">
                <form className="w-full h-auto">
                    <div className="formProduct w-full h-full min-h-[400px] flex flex-wrap justify-between px-5">
                        <input className={`w-[68%] h-[50px] my-2 rounded-[5px] 
                            border-solid border-[2px] ${err.nameProduct ? 'border-red-500' : 'border-blue-500'}`}
                            type="text"
                            {...registerProduct("nameProduct", {
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z0-9.@+' ']+$/,
                                    message: "Does not contain special characters"
                                }
                            })} placeholder="Name product" defaultValue={e.nameProduct} />

                        <input className={`w-[30%] h-[50px] my-2 rounded-[5px] 
                            border-solid border-[2px] ${err.price ? 'border-red-500' : 'border-blue-500'}`}
                            type="text"
                            {...registerProduct("price", {
                                required: true,
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Only numbers are allowed"
                                }
                            })} placeholder="Price" defaultValue={e.price} />

                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg 
                                                cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 
                                                dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <img className="w-10 h-10" src={fileUpload} alt="img File upload" />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" {...registerProduct("image", { required: false })} onChange={handleChange} />
                            </label>

                        </div>
                        <input className={`w-2/4 h-[50px] my-2 rounded-[5px] 
                            border-solid border-[2px] ${err.dateAdded ? 'border-red-500' : 'border-blue-500'}`}
                            type="date"
                            {...registerProduct("dateAdded", {
                                required: true,
                            })} defaultValue={e.dateAdded ? e.dateAdded.substring(0, 10) : ""} />
                        <select className={`w-[48%] h-[50px] my-2 rounded-[5px] 
                            border-solid border-[2px] ${err.type ? 'border-red-500' : 'border-blue-500'}`}
                            {...registerProduct("type", {
                                required: true
                            })}>
                            <option value={e.idType}>{e.nameType}</option>
                        </select>

                        <input className={`w-full h-[50px] my-2 rounded-[5px] 
                            border-solid border-[2px] ${err.type ? 'border-red-500' : 'border-blue-500'}`}
                            type="text"
                            {...registerProduct("brand", {
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z0-9.@]+$/,
                                    message: "Does not contain special characters"
                                }
                            })} placeholder="Brand Product" defaultValue={e.brand} />
                    </div>
                </form>
                <form className="w-full h-auto">
                    <h1 className="text-[20px] text-white text-center font-semibold my-2">Form detail by type product</h1>
                    <div className="formDetail w-full h-full min-h-[400px] flex flex-col px-5">
                        {dataType?.filter(f => f.type === e.nameType)[0]?.detail.map(d =>
                            <input className={`w-full h-3/5 max-h-[50px] my-2 outline-none rounded-[5px] 
                                border-solid border-[2px] ${err1[d.name] ? 'border-red-500' : 'border-blue-500'}`}
                                type={d.datatypes} placeholder={d.displayname} key={d.name} defaultValue={e.detail.map(c => c[d.name])}
                                {...registerDetail(d.name, {
                                    required: true,
                                })}
                            />
                        )}
                    </div>
                </form>
            </div>
            )}
            <button className="text-white w-[150px] h-[50px] bg-blue-500 rounded-[5px] flex justify-center"
                onClick={(e) => { handleSubmitData(e) }}>
                <img className="w-1/5 h-full object-contain" src={nextSubmit} alt="img btn submit" /><span className="w-3/5 h-full text-white text-[18px] font-bold flex items-center justify-center">Submit</span>
            </button>
        </div>
    </div>
}

