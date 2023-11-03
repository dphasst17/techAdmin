import { useContext, useState } from "react";
import listNameIcons from "./listIcon";
import { StateContext } from "~/context/stateContext";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { useNavigate } from "react-router-dom";
export const Header = () => {
    const {dark,showNav,setShowNav} = useContext(StateContext)
    const navigate = useNavigate()
    const checkLogin = JSON.parse(localStorage.getItem('isLogin') || false) === true;
    const getRoute = window.location.pathname
    return <header className={`w-[80vw] ssm:w-[60vw] sm:w-[40vw] lg:w-[20vw] 2xl:w-[12vw] h-[100vh] fixed lg:sticky lg:translate-x-0 ${showNav === true ? 'translate-x-0' : 'translate-x-[-100%]'} top-0 left-0 overflow-hidden 
    ${dark === true ? 'bg-slate-800' :'bg-slate-700'} px-2 z-50 transition-all`}>
        <div className="closeNav lg:hidden flex justify-end w-full h-[5vh] my-2">
            <AiOutlineCloseCircle className="w-[40px] h-full text-white mx-4" onClick={() => {setShowNav(false)}}/>
        </div>
        <nav className="lg:sticky w-full h-[50vh]
            flex flex-wrap lg:flex-nowrap flex-col items-center lg:items-start justify-around lg:justify-start
            inset-y-[20px] left-[20px] rounded-[10px] lg:p-2 sm:pt-0 pt-2 my-4">
            {listNameIcons.map((e,i) => 
                <div className={`navChild w-full h-[15%] 
                flex justify-center lg:justify-between items-center 
                lg:my-1 cursor-pointer rounded-[5px] pl-2 transition-all
                    ${e.link ===getRoute &&'bg-slate-100'}`}
                    key={i} 
                    onClick={() => {navigate(e.link)}}>
                    {<div className={`w-auto h-[30px] object-contain`}><e.url className={`w-[30px] h-[30px] ${e.link ===getRoute ?'text-black':'text-white'}`}/></div>}
                    <p className={`w-4/5 flex justify-start items-center text-[15px] font-semibold ${e.link ===getRoute ? 'text-slate-900':'text-slate-100'}`}>{e.name}</p>
                </div>
            )}
        </nav>
            <div onClick={() => {localStorage.setItem('isLogin',JSON.stringify(false));window.location.href = "/login"}} className="loginBtn lg:sticky top-[35vh] w-[50vw] sm:w-[40vw] md:w-[25vw] lg:w-4/5 h-[30px] lg:h-[50px] my-2 lg:m-auto rounded-[5px] bg-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all cursor-pointer flex items-center justify-center text-white font-semibold text-[18px]">
                <button>{checkLogin ? 'Logout':'Login'}</button>
            </div>
        
    </header>
}