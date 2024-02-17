import { useContext, useEffect, useState } from "react"
import { StateContext } from "~/context/stateContext"
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { createEvent, deleteEvent, editEvent } from "~/api/product";
import { CiTrash } from "react-icons/ci";
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import EventDetail from "~/common/detail/detailEvent";

/* Convert date from dd/mm/yyy to yyyy-mm-dd */
const formatDate = (date) => {
    return date.split('/').reverse().join("-")
}
const Event = () => {
    const { dataSale, setDataSale} = useContext(StateContext);
    const [idEdit, setIdEdit] = useState(0);
    const [formValue, setFormValue] = useState({ title: '', startDate: '', endDate: '' })
    const [addForm, setAddForm] = useState(false);
    const [detailEvent,setDetailEvent] = useState(false)
    const [idDetail,setIdDetail] = useState(0)
    const editEventSale = () => {
        const resultObj = dataSale.filter(f => f.idSale === idEdit)
        const validateForm = Object.keys(formValue).every(e => formValue[e] === "")
        const checkForm = resultObj.flatMap(e => e.title === formValue.title && e.startDate === formValue.startDate && e.endDate === formValue.endDate)
        if (validateForm || checkForm[0]) {
            setIdEdit(0)
            setFormValue({ title: '', startDate: '', endDate: '' })
            return
        }
        const data = {
            idSale: idEdit,
            title: formValue.title !== "" ? formValue.title : resultObj[0].title,
            startDate: formValue.startDate !== "" ? formatDate(formValue.startDate) : formatDate(resultObj[0].startDate),
            endDate: formValue.endDate !== "" ? formatDate(formValue.endDate) : formatDate(resultObj[0].endDate),
        }
        editEvent(data).then(res => {
            if (res.status === 200) {
                setDataSale(dataSale.map(e => {
                    return e.idSale !== idEdit ? { ...e } : ({
                        ...e,
                        title: formValue.title !== "" ? formValue.title : resultObj[0].title,
                        startDate: formValue.startDate !== "" ? formValue.startDate : resultObj[0].startDate,
                        endDate: formValue.endDate !== "" ? formValue.endDate : resultObj[0].endDate,
                    })
                }))
                setIdEdit(0)
                setFormValue({ title: '', startDate: '', endDate: '' })

            }
            alert(res.message)
        })
    }
    const delEvent = (idSale) => {
        deleteEvent(idSale).then(res => {
            if (res.status === 200) {
                setDataSale(dataSale.filter(f => f.idSale !== idSale))
            }
            alert(res.message)
        })
    }
    return <div className="event-detail relative w-full h-auto flex flex-wrap justify-center content-start lg:justify-between px-8 my-10">
        <h1 className="w-full h-[30px] text-[30px] font-bold text-white text-center my-8">Event management</h1>
        <button onClick={() => { setAddForm(!addForm) }} className="w-[150px] h-[30px] bg-green-500 rounded-lg my-8 text-white font-bold">Add new event</button>

        <div className="tbHead w-full h-[30px] flex flex-wrap justify-around border bg-slate-500 border-black border-solid">
            <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Id sale event</div>
            <div className="tbBody w-2/5 h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Title</div>
            <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Start date</div>
            <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">End date</div>
            <div className="tbBody w-[15%] h-full flex items-center justify-center text-white font-semibold">Action</div>
        </div>
        {dataSale !== null && dataSale.map(s => <div className="tbHead w-full h-[50px] flex flex-wrap justify-around border-b border-l border-r bg-slate-500 border-black border-solid">
            <div className="tbBody w-[15%] h-full flex items-center justify-center text-white font-semibold">{s.idSale}</div>
            <div className="tbBody w-2/5 h-full flex items-center justify-center text-white font-semibold">
                {idEdit === s.idSale ? <input type="text" className="w-4/5 h-[90%] border-slate-500 rounded-lg px-2 border-solid border bg-transparent outline-none"
                    onChange={(e) => { setFormValue({ ...formValue, title: e.target.value ? e.target.value : s.title }) }}
                    placeholder={s.title} /> : s.title}
            </div>
            <div className="tbBody w-[15%] h-full flex items-center justify-center text-white font-semibold">
                {idEdit === s.idSale ? <input type="text" className="w-4/5 h-[90%] border-slate-500 rounded-lg px-2 border-solid border bg-transparent outline-none"
                    onChange={(e) => { setFormValue({ ...formValue, startDate: e.target.value ? e.target.value : s.startDate }) }}
                    placeholder={s.startDate} /> : s.startDate}</div>
            <div className="tbBody w-[15%] h-full flex items-center justify-center text-white font-semibold">
                {idEdit === s.idSale ? <input type="text" className="w-4/5 h-[90%] border-slate-500 rounded-lg px-2 border-solid border bg-transparent outline-none"
                    onChange={(e) => { setFormValue({ ...formValue, endDate: e.target.value ? e.target.value : s.endDate }) }}
                    placeholder={s.endDate} /> : s.endDate}</div>
            <div className="tbBody w-[15%] h-full flex items-center justify-evenly text-white font-semibold">
                {idEdit !== s.idSale && <button onClick={() => {setDetailEvent(!detailEvent);setIdDetail(s.idSale)}} className="w-[50px] h-[20px] rounded-lg flex justify-center items-center bg-blue-500 "><FaEye /></button>}
                {idEdit !== s.idSale && <button onClick={() => { setIdEdit(s.idSale) }} className="w-[50px] h-[20px] rounded-lg flex justify-center items-center bg-green-500 "><FaEdit /></button>}
                {idEdit !== s.idSale && <button onClick={() => { delEvent(s.idSale) }} className="w-[50px] h-[20px] rounded-lg flex justify-center items-center bg-red-500 "><FaTrash /></button>}
                {idEdit === s.idSale && <button onClick={() => { editEventSale() }} className="w-[50px] h-[20px] rounded-lg flex justify-center items-center bg-green-500 ">Save</button>}
                {idEdit === s.idSale && <button onClick={() => { setIdEdit(0); setFormValue({ title: '', startDate: '', endDate: '' }) }} className="w-[50px] h-[20px] rounded-lg flex justify-center items-center bg-red-500 ">Close</button>}
            </div>
        </div>)}
        {addForm && <FormAddEvent props={{ setAddForm }} />}
        {detailEvent && <EventDetail props={{idDetail,setDetailEvent}}/>}
    </div>
}
const FormAddEvent = ({ props }) => {
    const { dataProduct,dataSale,setDataSale } = useContext(StateContext)
    const [sale, setSale] = useState([1]);
    const { register, handleSubmit,control, formState: { errors:err } } = useForm();
    const [newData, setNewData] = useState(null)
    useEffect(() => {
        dataProduct !== null && setNewData(dataProduct.map(e => { return { value: e.idProduct, label: e.nameProduct,isDis:false } }))
    }, [dataProduct])
    const handleChange = data => {
        setNewData(newData.map(e => {
            return {
                ...e,
                isDis:data.map(d => d.value).includes(e.value) ? !e.isDis : e.isDis
            }
        }))
    }
    const onSubmit = data => {
        const result = {
            title:data.title,
            startDate:data.start,
            endDate:data.end,
            detail:sale.map(e => {
                return {
                    discount:data[`percent-${e}`],
                    listProduct:data[`select${e}`].map(p => p.value)
                }
            })
        }
        console.log(result)
        console.log(data)
        console.log(dataSale)
        createEvent(result).then(res => {
            if(res.status === 201){
                alert(res.data.message)
                const lastData = {
                    idSale:res.data.id,
                    title:data.title,
                    startDate:data.start.split('-').reverse().join("/"),
                    endDate:data.end.split('-').reverse().join("/")
                }
                setDataSale([...dataSale,lastData])
                props.setAddForm(false)
            }else{
                alert(res.message)
            }
        })
    }
    return <div className="t-detailItem w-full h-auto flex flex-wrap items-center justify-start my-4">
        <div className="tbHead w-full h-[30px] flex flex-wrap justify-around bg-slate-500 border-l border-r border-t border-black border-solid">
            <div className="tbBody w-1/5 h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Title</div>
            <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">Start date</div>
            <div className="tbBody w-[15%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">End date</div>
            <div className="tbBody w-2/4 h-full flex items-center justify-center bg-slate-500 border-black border-solid text-white font-semibold">Detail</div>
        </div>
        <div className="tbContent w-full h-auto min-h-[35px] flex flex-wrap items-center justify-around bg-slate-500 border border-black border-solid">
            <form className="w-2/4 h-auto flex flex-wrap">
                <div className="tbBody w-2/5 h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">
                    <input {...register(`title`,{ required: true })} type="text" className="w-[95%] h-4/5 bg-transparent rounded-lg outline-none" placeholder="Title" />
                </div>
                <div className="tbBody w-[30%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">
                    <input {...register(`start`,{ required: true })} type="date" className="w-[95%] h-4/5 bg-transparent rounded-lg outline-none" placeholder="Date" />
                </div>
                <div className="tbBody w-[30%] h-full flex items-center justify-center border-r bg-slate-500 border-black border-solid text-white font-semibold">
                    <input {...register(`end`,{ required: true })} type="date" className="w-[95%] h-4/5 bg-transparent rounded-lg outline-none" placeholder="Date" />
                </div>
            </form>
            <div className="tbBody w-2/4 h-full flex flex-wrap items-center justify-start bg-slate-500 px-2 border-black border-solid text-white font-semibold">
                <form className="w-full h-auto flex flex-wrap">
                    {sale.map(e => (
                        <div key={e} className="w-[90%] flex items-center mr-4 my-2">
                            #{e} - <input {...register(`percent-${e}`,{ required: true })} type="text" className="w-[30px] h-[30px] flex justify-center items-center rounded-lg bg-transparent border-solid border-slate-300 border outline-none mx-2 px-2" placeholder="%" />
                            {'=>'}
                            <Controller
                                name={`select${e}`}
                                control={control}
                                defaultValue=""
                                rules={{ required: true}}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        className="w-4/5 rounded-lg bg-transparent text-black border-slate-400 border-solid border outline-none mx-2"
                                        options={newData?.filter(f => !f.isDis)}
                                        isMulti
                                        onChange={change => {
                                            field.onChange(change)
                                            handleChange(change)
                                        }}
                                    />
                                )}
                            />
                            <div onClick={() => setSale(sale.filter(f => f !== e))} className="w-[25px] h-[25px] flex items-center justify-center rounded-lg bg-red-500 cursor-pointer">
                                <CiTrash />
                            </div>
                        </div>
                    ))}
                </form>
                <div className="w-full h-[30px] flex items-center justify-center">
                    <button onClick={() => { setSale([...sale, sale.length + 1]) }} className="w-[150px] bg-green-500 rounded-lg">Add more</button>
                </div>
            </div>
        </div>
        <button onClick={(e) => { e.preventDefault(); handleSubmit(onSubmit)()}} className="w-[150px] h-[30px] bg-green-500 rounded-lg my-8 text-white font-bold">Add event</button>
        <button onClick={() => { props.setAddForm(false) }} className="w-[150px] h-[30px] bg-red-500 rounded-lg my-8 text-white font-bold mx-2">Close</button>
    </div>
}
export default Event