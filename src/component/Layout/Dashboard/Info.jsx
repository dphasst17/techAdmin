import { useContext, useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { AiFillFacebook,AiFillGithub } from "react-icons/ai";
import { StateContext } from "~/context/stateContext";
import { useGetLocalStorage, useSetLocalStorage } from "~/hooks/useLocalStorage.jsx";
const InfoUser = () => {
    const [title,setTitle] = useState('Dark Mode');
    const {dark,setDark,userDetail} = useContext(StateContext);
    const [x,setX] = useState('-6px');
    const data = userDetail !== null && userDetail[0]
    useEffect(() => {
        if (dark === true) {
          setTitle('Light Mode');
          setX('15px');
        } else {
          setTitle('Dark Mode');
          setX('-6px');
        }
      }, [dark,setTitle,setX]);
    const handleDarkMode = () => {
        setDark(!dark) 
        useSetLocalStorage({key:'darkMode',value:!dark})
    }
    return <div className="info w-[98%] lg:w-[65%] h-3/5 md:h-2/4 lg:h-[65%] my-2 md:mx-0 bg-white rounded-[10px] flex flex-col md:flex-row justify-around">
        <div className="w-full md:w-[35%] h-2/5 md:h-full flex md:justify-around items-center px-2">
            <div className="imgUser md:w-[50px] h-[35px] sm:h-[40px] md:h-[50px] flex items-center">
                <img className="w-[40px] md:w-[100px] h-[40px] object-contain border-solid border-[#3b82f6] border-[2px] rounded-full" src={
                    data.img?.length !== 0 ? data?.img : 'https://i.pinimg.com/736x/e2/68/bf/e268bfe1ef2a13e8487393ea661ecf73.jpg'
                } alt="avatar User"/>
            </div>
            <div className="infoDetail w-full lg:min-w-[90px] h-full pl-[2%] flex flex-wrap justify-start items-center">
                <span className=" flex flex-wrap w-full text-black font-semibold text-[20px] lg:text-[18px] xl:text-[20px]">
                    <span className="w-full">{data.nameUser}</span>
                    <span className="w-3/4">Role: {data?.role === 0 ? 'Admin' : data?.role === 1 ? 'Staff' : 'User'}</span>
                </span>
            </div>
            
        </div>
        <div className="w-full md:w-[65%] h-[55%] md:h-full flex flex-wrap md:flex-nowrap lg:flex-wrap  xl:flex-nowrap items-center">
            <div className="searchInput w-full md:w-2/5 lg:w-full xl:w-2/5 h-2/5 md:h-3/5 lg:h-2/5 xl:h-3/5 px-1 flex justify-around items-center border-[1px] rounded-[10px] border-solid border-black">
                <input className="w-4/5 h-4/5 outline-none rounded-[10px]" type="text" placeholder="Search..."  />
                <div className="w-[18%] h-4/5 bg-slate-400 rounded-[10px]"><FcSearch className="w-full h-full" /></div>
            </div>
            <div onClick={() =>{handleDarkMode()}} className="darkMode w-2/5 xl:w-[30%] lg:w-2/5 md:w-[30%] h-2/5 xl:h-3/5 lg:h-2/5 md:h-3/5 flex items-center justify-around cursor-pointer bg-slate-600 rounded-[10px] mx-2 text-white tex-[20px] font-semibold">
                {title}
                <div className="switch flex" >
                    <input type="checkbox" id="switch" className="h-0 w-0 invisible" />
                    <label htmlFor="switch" className="cursor-pointer w-11 h-5 bg-white bg-opacity-20 block rounded-full relative transition-all duration-300 ease-in-out px-1 box-content">
                        <span style={{transform: `translateX(${x})`}} className={`block w-5 h-5 bg-white rounded-full transition-all  duration-300 ease-in-out absolute`}></span>
                    </label>
                </div>
            </div>
            <div className="contactInfo w-2/4 md:w-[200px] h-3/5 flex flex-wrap justify-around">
                <div className="title w-full text-[15px] font-semibold flex justify-center text-center">Contact us</div>
                <div className="face w-[60px] md:w-[80px] h-2/4 flex justify-center items-center bg-[#4267B2] rounded-[5px] cursor-pointer"><AiFillFacebook className="w-2/4 h-full fill-white" /></div>
                <div onClick={() => {window.location.href = 'https://github.com/dphasst17'}} className="git w-[60px] md:w-[80px] h-2/4 flex justify-center items-center bg-black rounded-[5px] cursor-pointer mx-2"><AiFillGithub className="w-2/4 h-full fill-white" /></div>
            </div>
        </div>
    </div>
}
export default InfoUser;