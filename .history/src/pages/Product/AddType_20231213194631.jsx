import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { uploadImageProductToS3, uploadImageProductToSV } from "~/api/product";
import closeIcon from "~/image/close.png";
import fileUpload from "~/image/fileUpload.png";
import nextSubmit from "~/image/nextSubmit.png";
const AddType = ({ props }) => {
    const { register, handleSubmit,watch, formState: { errors: err } } = useForm();
    const [inputs, setInputs] = useState([]);
    const watchSelect = watch('select');

    const handleClick = () => {
        setInputs(['', '', '']);
    };
    const handleChange = (event) => {
        const file = event.target.files;
        for (let i of file) {
            setFile(prevFiles => [...prevFiles, file[i]]);
            setFileName(prevFileNames => [...prevFileNames, file[i].name]);
        }
    };
    const onSubmit = (data) => {
        /* fileName !== "" && setUploadImg({ file: fileName })
        fileName === "" && data.urlImage !== "" && setUploadImg({ urlImage: data.urlImage.split(",") })
        fileName === "" && data.urlImage === "" && alert("Please enter the image path or choose to upload from folder") */
    }
    const handleSelectChange = (e) => {
        setId(e.target.value)
    }

    return <div className="formProduct w-screen h-screen flex items-center justify-center fixed z-50 top-0">
        <div onClick={() => { props.setAddImg(false) }} className="formProduct-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        <div onClick={() => { props.setAddImg(false) }} className="closeBtn absolute w-[60px] h-[50px]
             cursor-pointer flex items-center justify-center top-5 left-2 z-50">
            <img src={closeIcon} className="w-full h-full object-contain" alt="close-icon" />
        </div>
        <div className="formDetail md:w-[800px] h-screen bg-slate-500 z-40 flex flex-col justify-around items-center pt-12 md:pt-0 pb-5">
            <h1 className="text-[20px] text-white font-bold text-center">FORM ADD NEW PRODUCT</h1>
            <div className="formView w-full h-[90%] flex flex-col justify-between overflow-y-auto">
                <form className="w-full h-auto">
                    <button type="button" onClick={handleClick}>Add column</button>
                    <div className="formProduct w-full h-full min-h-[400px] flex flex-wrap justify-center px-5">
                        <input
                            className={`w-full h-[70px] my-2 outline-none  ${err.file && err.urlImage ? 'border-red-500' : 'border-blue-500'} rounded-[5px] border-solid border-[2px]`}
                            type="text"
                            {...register("urlImage", { required: false })}
                            placeholder="URL IMAGE - DEMO: https://imageproduct.com/asset/image/image1,https://imageproduct.com/asset/image/image2,https://imageproduct.com/asset/image/image3"
                        />
                        

                        {/* <select className={`w-full h-[50px] my-2 outline-none rounded-[5px] border-solid border-[2px] ${err.idProduct ? 'border-red-500' : 'border-blue-500'}`}
                            {...register("idProduct", { required: true })}
                            onChange={handleSelectChange}
                        >
                            <option value="">SELECT PRODUCT</option>
                            {props.data !== null && props.data.map(e => <option value={e.idProduct}>{e.nameProduct}</option>)}
                        </select> */}
                    </div>
                </form>
            </div>
            <button className="text-white w-[150px] h-[50px] bg-blue-500 rounded-[5px] flex justify-center"
                onClick={(e) => { e.preventDefault(); handleSubmit(onSubmit)(); }}>
                <img className="w-1/5 h-full object-contain" src={nextSubmit} alt="img btn submit" /><span className="w-3/5 h-full text-white text-[18px] font-bold flex items-center justify-center">Submit</span>
            </button>
        </div>
    </div>
}
export default AddType;