import { useContext, useEffect, useState } from "react";
import { StateContext } from "~/context/stateContext";
import fileUpload from "~/image/fileUpload.png";
import nextSubmit from "~/image/nextSubmit.png";
import { useForm } from "react-hook-form";
import closeIcon from "~/image/close.png";
import { postProductInsert, uploadImageProductToS3 } from "~/api/product";
export const FormAddNew = ({ props }) => {
    const { register: registerProduct, handleSubmit: handleSubmitProduct, formState: { errors: err } } = useForm();
    const { register: registerDetail, handleSubmit: handleSubmitDetail,reset, formState: { errors: err1 } } = useForm();
    const { dataType,stateForm, setStateForm } = useContext(StateContext);
    const [selectValue, setSelectValue] = useState();
    const [dataDetail,setDataDetail] = useState(null)
    const [getName, setGetName] = useState(null);
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState("")
    const handleSelectChange = (e) => {
        setSelectValue(e.target.value)
        reset()
    }
    /* update file in tomorrow */
    const onSubmit = (data) => {
       
        Object.keys(err).length === 0 && setStateForm(prevState => ({ ...prevState, product: [Object.values(data)] }));
    }
    const onSubmit2 = (data) => {
        Object.keys(err1).length === 0 && selectValue !== ("" || undefined) && setStateForm(prevState => ({ ...prevState, detail: Object.fromEntries(
            Object.entries(data).filter(([key, value]) => value !== null && value !== undefined)
          ) }));
    }
    useEffect(() => {
        selectValue && setGetName(selectValue);
    }, [selectValue])
    useEffect(() => {
        getName && dataType !== null &&  setDataDetail(dataType?.filter(f => f.type === getName)[0])
    },[getName])
    
    const handleChange = (event) => {
        const file = event.target.files[0];
        setFile(file)
        setFileName(file.name);
    };
    useEffect(() => {
        console.log(stateForm)
        const FetchDataInsert = async () => {
            if (stateForm.product.length !== 0 && stateForm.detail.length !== 0) {
                let newProduct = [...stateForm.product]
                let newImgUrl = fileName;
                newProduct[0][2] = newImgUrl;
                let newStateForm = { ...stateForm, product: newProduct[0] };
                //Post Data Insert Product is here
                const newFile = new FormData
                newFile.append('file', file)
                uploadImageProductToS3(newFile)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

                console.log(file);
                console.log(newStateForm)
                postProductInsert(newStateForm)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

            }
        }
        FetchDataInsert()
    }, [stateForm])
    return <div className="formProduct w-screen xl:w-[88vw] h-screen flex items-center justify-center fixed z-50 top-0 ">
        <div onClick={() => { props.setAddNew(false); setStateForm({ folder: 'product', product: [], detail: [] }) }} className="formProduct-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        <div onClick={() => { props.setAddNew(false); setStateForm({ folder: 'product', product: [], detail: [] }) }} className="closeBtn absolute w-[60px] h-[50px]
             cursor-pointer flex items-center justify-center top-1 lg:top-5 left-0 lg:left-2 z-50">
            <img src={closeIcon} className="w-3/4 lg:w-full h-3/4 lg:h-full object-contain" alt="close-icon" />
        </div>
        <div className="formDetail w-full md:w-4/5 xl:w-[800px] h-screen bg-slate-500 z-40 flex flex-col justify-around items-center pt-12 md:pt-0 pb-5">
            <h1 className="text-[20px] text-white font-bold text-center">FORM ADD NEW PRODUCT</h1>
            <div className="formView w-full h-[90%] flex flex-col justify-between overflow-y-auto">
                <form className="w-full h-auto">
                    <div className="formProduct w-full h-full min-h-[400px] flex flex-wrap justify-between px-5">
                        <input
                            className={`w-[68%] h-[50px] my-2 outline-none rounded-[5px] 
                            border-solid border-[2px] ${err.nameProduct ? 'border-red-500' : 'border-blue-500'}`}
                            type="text"
                            {...registerProduct("nameProduct", { required: "This is not required" })}
                            placeholder="Name product"
                        />
                        <input className={`w-[30%] h-[50px] my-2 outline-none rounded-[5px] border-solid border-[2px] ${err.price ? 'border-red-500' : 'border-blue-500'}`}
                            type="number"{...registerProduct("price", { required: true, pattern: /^[0-9]+$/ })} placeholder="Price" />
                        <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className={`flex flex-col items-center justify-center w-full h-64 border-2 ${err.image ? 'border-red-500' : 'border-gray-300'}
                                    border-dashed rounded-lg cursor-pointer bg-gray-700 `}>
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <img className="w-10 h-10" src={fileUpload} alt="img File upload" />
                                    {fileName && <span className="text-sm text-gray-500 dark:text-white my-2">{fileName}</span>}
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" {...registerProduct("image", { required: true })} onChange={handleChange} />
                            </label>
                        </div>
                        <input className={`w-2/4 h-[50px] my-2 outline-none rounded-[5px] border-solid border-[2px] ${err.dateAdded ? 'border-red-500' : 'border-blue-500'}`}
                            type="date" {...registerProduct("dateAdded", { required: true })} placeholder="Date" />
                        <select className={`w-[48%] h-[50px] my-2 outline-none rounded-[5px] border-solid border-[2px] ${err.type ? 'border-red-500' : 'border-blue-500'}`}
                            {...registerProduct("type", { required: true })} onChange={handleSelectChange}>
                            <option value="">SELECT TYPE PRODUCT</option>
                            {dataType !== null && dataType.map(e => <option value={e.type}>{e.type.toUpperCase()}</option>)}
                        </select>
                        <input className={`w-full h-[50px] my-2 outline-none rounded-[5px] border-solid border-[2px] ${err.brand ? 'border-red-500' : 'border-blue-500'}`}
                            type="text" {...registerProduct("brand", { required: true })} placeholder="Brand Product" />
                    </div>
                </form>
                <form className="w-full h-auto">
                    <h1 className="text-[20px] text-white text-center font-semibold my-2">Form detail by type product</h1>
                    <div className="formDetail w-full h-full min-h-[400px] flex flex-col px-5">
                        {dataDetail !== null &&  dataDetail?.detail.map(e => 
                            <input 
                            className={`w-full h-3/5 max-h-[50px] my-2 outline-none rounded-[5px] border-solid border-[2px] ${err1[`${e.name}`] ? 'border-red-500' : 'border-blue-500'}`} 
                            type={e.datatypes} placeholder={e.displayname.toUpperCase()} key={e.name}
                                {...registerDetail(`${e.name}`, { required: true })}
                            />
                        )}
                    </div>
                </form>
            </div>
            <button className="text-white w-[150px] h-[50px] bg-blue-500 rounded-[5px] flex justify-center"
                onClick={(e) => { e.preventDefault(); handleSubmitDetail(onSubmit2)(); handleSubmitProduct(onSubmit)(); }}>
                <img className="w-1/5 h-full object-contain" src={nextSubmit} alt="img btn submit" /><span className="w-3/5 h-full text-white text-[18px] font-bold flex items-center justify-center">Submit</span>
            </button>
        </div>
    </div>
}

