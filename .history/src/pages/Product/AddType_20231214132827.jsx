import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { uploadImageProductToS3, uploadImageProductToSV } from "~/api/product";
import closeIcon from "~/image/close.png";
import fileUpload from "~/image/fileUpload.png";
import nextSubmit from "~/image/nextSubmit.png";
const AddType = ({ props }) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [inputs, setInputs] = useState([1,2,3]);
    const watchSelect = watch('select');

    const handleClick = () => {
        setInputs([...inputs, inputs.length + 1]);
    };
    const onSubmit = (data) => {
        const arrayObj = inputs.map((value) => ({
            name: data[`input${value}`],
            type: data[`option${value}`],
            limit: data[`option${value}`] === 'varchar' ? Number(data[`input-demo${value}`]) : 0
        }));
        console.log(arrayObj);
    };
    const delCol = (index) => {
        setInputs(inputs.filter(e => e !== Number(index)))
    }
    return <div className="formProduct w-screen h-screen flex items-center justify-center fixed z-50 top-0">
        <div onClick={() => { props.setAddType(false) }} className="formProduct-overlay w-full h-full absolute opacity-60 bg-black z-20"></div>
        <div onClick={() => { props.setAddType(false) }} className="closeBtn absolute w-[60px] h-[50px]
             cursor-pointer flex items-center justify-center top-5 left-2 z-50">
            <img src={closeIcon} className="w-full h-full object-contain" alt="close-icon" />
        </div>
        <div className="formDetail md:w-[60vw] h-[50vh] bg-slate-500 z-40 flex flex-col justify-start items-center pt-12 md:pt-0 pb-5 rounded-xl">
            <h1 className="text-[20px] text-white font-bold text-center">FORM ADD NEW TYPE</h1>
            <div className="formView w-full h-[90%] flex flex-col justify-start overflow-y-auto">
                <button className="w-[100px] h-[30px] rounded-lg bg-green-200 mx-2 font-bold" type="button" onClick={handleClick}>Add column</button>
                <form className="w-full h-auto overflow-y-auto flex flex-wrap justify-center">
                    <input type="text" className="w-3/4 h-[40px] my-4 rounded-lg outline-none px-2" placeholder="Name type..." />
                    <div className="formProduct w-[98%] h-auto min-h-[50px] flex flex-wrap justify-center items-start px-5">
                        {inputs.map((input) => (
                            <div className="lg:w-4/5 h-[40px] flex justify-around my-4" key={input}>
                                <input
                                    className="w-1/4 h-full rounded-lg outline-none px-2"
                                    name={`name-${input}`}
                                    {...register(`input${input}`, { required: false })}
                                    placeholder="Name"

                                />
                                <select className="w-1/4 h-full rounded-lg" name="select" {...register(`option${input}`, { required: false })}>
                                    <option value="varchar">Text</option>
                                    <option value="longtext">Long Text</option>
                                    <option value="int">Number</option>
                                    <option value="date">Date</option>
                                </select>
                                <input 
                                    className="w-1/4 h-full rounded-lg outline-none px-2"
                                    name={`limit-${input}`}
                                    {...register(`input-demo${input}`, { required: false })}
                                    placeholder="Character limit..."
                                />
                                <button onClick={(e) => {e.preventDefault();delCol(input)}} className="w-[15%] h-full bg-red-700 text-white font-bold rounded-lg">Delete column</button>
                            </div>
                        ))}

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