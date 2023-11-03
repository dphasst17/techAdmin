import { useContext, useEffect, useState } from "react";
import ErrorPage from "~/common/ErrorPage";
import { StateContext } from "~/context/stateContext";
import { useGetData, useGetDataByKey } from "~/hooks/useSelectData";
import userOne from "~/image/userOne.png"

const User = () => {
    const {dark,userDetail} = useContext(StateContext)
    const [user, setUser] = useState(null);
    const detail = userDetail !== null && userDetail[0]
    const {dataResult:data,err} = useGetData('user','getAllUser')
    useEffect(() => {
        data !== null && setUser(data)
    }, [data])
    return <div className="user-container w-full h-auto flex flex-wrap justify-center lg:justify-start items-center">
        <div className="user w-full sm:w-4/5 lg:w-2/5 h-[500px] flex items-center justify-center my-4">
            <div className={`userDetail w-4/5 h-[500px] flex flex-wrap items-center justify-center rounded-lg border-solid border-[1px] border-slate-500 ${dark === true ? 'bg-transparent' : ' bg-slate-500'}`}>
                <div className="imgUser w-full h-[100px] flex items-center justify-center">
                    <img className="w-2/4 h-4/5 object-contain" src={detail.img?.length !== 0 ? detail.img : 'https://i.pinimg.com/736x/e2/68/bf/e268bfe1ef2a13e8487393ea661ecf73.jpg'} />
                </div>
                <div className="infoUser w-full h-auto flex flex-wrap justify-center">
                    <span className="w-[90%] h-[50px] flex items-center text-black text-[15px] font-semibold pl-2 my-2 rounded-lg bg-slate-200">Name:{detail.nameUser}</span>
                    <span className="w-[90%] h-[50px] flex items-center text-black text-[15px] font-semibold pl-2 my-2 rounded-lg bg-slate-200">Email:{detail.email}</span>
                    <span className="w-[90%] h-[50px] flex items-center text-black text-[15px] font-semibold pl-2 my-2 rounded-lg bg-slate-200">Phone:{detail.phone}</span>
                    <span className="w-[90%] h-[50px] flex items-center text-black text-[15px] font-semibold pl-2 my-2 rounded-lg bg-slate-200">Role:{detail.role === 0 ? 'Admin': detail.role === 1 ? 'Staff' :'User'}</span>
                </div>
                <button className="w-2/5 h-[40px] bg-blue-500 rounded-lg text-white text-[25px] font-bold">Edit</button>
            </div>
        </div>
        <div className="all w-full lg:w-3/5 h-auto flex flex-col items-center cursor-pointer my-4">
            <div className="titleTable w-4/5 h-[50px] bg-slate-800 rounded-lg flex justify-between">
                <span className="w-1/4 h-full flex items-center justify-center text-white text-center font-semibold">Info</span>
                <span className="w-1/4 h-full flex items-center justify-center text-white text-center font-semibold">Email</span>
                <span className="w-[10%] h-full flex items-center justify-center text-white text-center font-semibold">Role</span>
                <span className="w-2/5 h-full flex items-center justify-center text-white text-center font-semibold">Actions</span>
            </div>
            <div className="contentTable w-full h-auto flex flex-wrap justify-center">
                {user!== null && user.map(e => 
                    <div className={`detail w-4/5 h-auto flex my-2 border-solid border-[1px] border-slate-500 ${dark === true ? 'bg-transparent' : ' bg-slate-500'} rounded-lg`}>
                        <div className="w-1/4 h-full flex flex-wrap items-center justify-center text-white text-center font-semibold">
                            <div className="img w-full h-[60px]"><img className="w-full h-full object-contain" src={e.img === "" ? userOne : e.img} /></div>
                            <span className="w-full overflow-hidden whitespace-nowrap text-ellipsis">{e.idUser}</span>
                            <span className="w-full">{e.nameUser}</span>
                        </div>
                        <div className="w-1/4 h-auto flex items-center justify-center text-white text-center font-semibold">
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis">{e.email}</span>
                        </div>
                        <div className="w-[10%] h-full flex items-center justify-center text-white text-center font-semibold">{e.role}</div>
                        <div className="w-2/5 h-full flex items-center justify-center text-white text-center font-semibold">Actions</div>
                    </div>
                )}
            </div>
        </div>
    </div>
}
export default User;