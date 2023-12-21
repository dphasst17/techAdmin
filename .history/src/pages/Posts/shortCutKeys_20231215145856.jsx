const ShortKey = () => {
    return <div className="shortKey-container md:w-4/5 h-auto flex flex-wrap justify-around bg-slate-500 rounded-lg px-2">
        <div className="heading w-1/5 h-auto flex flex-col">
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + 2 : Heading 1</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + 3 : Heading 2</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + 4 : Heading 3</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + 5 : Heading 4</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + 6 : Heading 5</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + 7 : Heading 6</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + 0 : Normal</span>
        </div>

        <div className="size w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + Alt + 1 : Size Small</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + Alt + 2 : Size Normal</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + Alt + 3 : Size Large</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + Alt + 4 : Size Huge</span>
        </div>

        <div className="align w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + E : Align Center</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + R : Align Right</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + J : Align Justify</span>
        </div>

        <div className="more w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + B : Font Bold</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + I : Italics</span>
            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> + U : Underline</span>

            {/* <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> +Alt + I : Image folder</span> */}

            <span className="w-full text-white font-semibold my-2"><span className="w-[80px] h-[20px] bg-slate-400">Ctrl</span> +Alt + L : Code block</span>
        </div>
    </div>
}
export default ShortKey