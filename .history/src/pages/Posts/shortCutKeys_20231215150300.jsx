const ShortKey = () => {
    const shortKey = [
        {
            name:'',
            detail:[]
        },
        {
            name:'',
            detail:[]
        },
        {
            name:'',
            detail:[]
        },
        {
            name:'',
            detail:[]
        }
    ]
    return <div className="shortKey-container md:w-4/5 h-auto flex flex-wrap justify-around bg-slate-500 rounded-lg px-2">
        <div className="heading w-1/5 h-auto flex flex-col">
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + 2 : Heading 1</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + 3 : Heading 2</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + 4 : Heading 3</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + 5 : Heading 4</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + 6 : Heading 5</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + 7 : Heading 6</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + 0 : Normal</span>
        </div>

        <div className="size w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 1 : Size Small</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 2 : Size Normal</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 3 : Size Large</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 4 : Size Huge</span>
        </div>

        <div className="align w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + E : Align Center</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + R : Align Right</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + J : Align Justify</span>
        </div>

        <div className="more w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + B : Font Bold</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + I : Italics</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> + U : Underline</span>

            {/* <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> +Alt + I : Image folder</span> */}

            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-500 bg-slate-400 rounded-lg">Ctrl</div> +Alt + L : Code block</span>
        </div>
    </div>
}
export default ShortKey