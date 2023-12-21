import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { uploadImageProductToS3, uploadImageProductToSV } from "~/api/product";
import closeIcon from "~/image/close.png";
import fileUpload from "~/image/fileUpload.png";
import nextSubmit from "~/image/nextSubmit.png";
const AddType = ({ props }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [inputs, setInputs] = useState([1]);
    const watchSelect = watch('select');

    const handleClick = () => {
        setInputs(['','','']);
    };
    const onSubmit = (data) => {
        console.log(data);
    };

    return <div className="formProduct w-screen h-screen flex items-center justify-center fixed z-50 top-0">
        <div onClick={() => { props.setAddType(false) }} className="formProduct-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        <div onClick={() => { props.setAddType(false) }} className="closeBtn absolute w-[60px] h-[50px]
             cursor-pointer flex items-center justify-center top-5 left-2 z-50">
            <img src={closeIcon} className="w-full h-full object-contain" alt="close-icon" />
        </div>
        <div className="formDetail md:w-[800px] h-screen bg-slate-500 z-40 flex flex-col justify-around items-center pt-12 md:pt-0 pb-5">
            <h1 className="text-[20px] text-white font-bold text-center">FORM ADD NEW PRODUCT</h1>
            <div className="formView w-full h-[90%] flex flex-col justify-between overflow-y-auto">
                <form className="w-full h-auto">
                    <button type="button" onClick={handleClick}>Add column</button>
                    <div className="formProduct w-full h-full min-h-[400px] flex flex-wrap justify-center px-5">
                        {inputs.map((input, index) => (
                            <>
                                <input
                                    key={index}
                                    name={`input${index}`}
                                    {...register(`input${index}`, { required: false })}
                                    disabled={watchSelect !== 'text' && index === 0}
                                />
                                <input key={index}
                                    name={`input-demo${index}`}
                                    {...register(`input-demo${index}`, { required: false })}
                                    disabled={watchSelect !== 'text' && index === 0} />
                            </>
                        ))}
                        <select name="select" {...register(`option`, { required: false })}>
                            <option value="text">Text</option>
                            <option value="long text">Long Text</option>
                            <option value="number">Number</option>
                            <option value="date">Date</option>
                        </select>
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