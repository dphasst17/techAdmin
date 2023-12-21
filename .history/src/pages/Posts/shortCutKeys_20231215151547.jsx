const ShortKey = () => {
    const shortKey = [
        {
            name: 'heading',
            detail: [
                {
                    first: 'Ctrl',
                    second: '2',
                    third: '',
                    result: 'Heading 1'
                },
                {
                    first: 'Ctrl',
                    second: '3',
                    third: '',
                    result: 'Heading 2'
                },
                {
                    first: 'Ctrl',
                    second: '4',
                    third: '',
                    result: 'Heading 3'
                },
                {
                    first: 'Ctrl',
                    second: '5',
                    third: '',
                    result: 'Heading 4'
                },
                {
                    first: 'Ctrl',
                    second: '6',
                    third: '',
                    result: 'Heading 5'
                },
                {
                    first: 'Ctrl',
                    second: '7',
                    third: '',
                    result: 'Heading 6'
                },
                {
                    first: 'Ctrl',
                    second: '0',
                    third: '',
                    result: 'Normal'
                }
            ]
        },
        {
            name: 'size',
            detail: [
                {
                    first: 'Ctrl',
                    second: 'Alt',
                    third: '1',
                    result: 'Size Small'
                },
                {
                    first: 'Ctrl',
                    second: 'Alt',
                    third: '2',
                    result: 'Size Normal'
                },
                {
                    first: 'Ctrl',
                    second: 'Alt',
                    third: '3',
                    result: 'Size Large'
                },
                {
                    first: 'Ctrl',
                    second: 'Alt',
                    third: '4',
                    result: 'Size Huge'
                }
            ]
        },
        {
            name: 'align',
            detail: [
                {
                    first: 'Ctrl',
                    second: 'E',
                    third: '',
                    result: 'Align Center'
                },
                {
                    first: 'Ctrl',
                    second: 'R',
                    third: '',
                    result: 'Align Right'
                },
                {
                    first: 'Ctrl',
                    second: 'J',
                    third: '',
                    result: 'Align Justify'
                }
            ]
        },
        {
            name: 'more',
            detail: [
                {
                    first: 'Ctrl',
                    second: 'B',
                    third: '',
                    result: 'Font Bold'
                },
                {
                    first: 'Ctrl',
                    second: 'I',
                    third: '',
                    result: 'Italics'
                },
                {
                    first: 'Ctrl',
                    second: 'U',
                    third: '',
                    result: 'Underline'
                },
                {
                    first: 'Ctrl',
                    second: 'Alt',
                    third: 'L',
                    result: 'Code Block'
                }
            ]
        }
    ]
    return <div className="shortKey-container md:w-4/5 h-auto flex flex-wrap justify-around bg-slate-500 rounded-lg px-2">
        {shortKey.map(e => <div className={`${e.name}`} key={e.name}>
            {e.detail.map(d => <span className="w-full text-white font-semibold my-2" key={d.result}>

            </span>)}

        </div>)}
        <div className="heading w-1/5 h-auto flex flex-col">
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + 2 : Heading 1</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + 3 : Heading 2</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + 4 : Heading 3</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + 5 : Heading 4</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + 6 : Heading 5</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + 7 : Heading 6</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + 0 : Normal</span>
        </div>

        <div className="size w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 1 : Size Small</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 2 : Size Normal</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 3 : Size Large</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + Alt + 4 : Size Huge</span>
        </div>

        <div className="align w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + E : Align Center</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + R : Align Right</span>
            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + J : Align Justify</span>
        </div>

        <div className="more w-1/5 h-auto flex flex-col my-2">
            <span className="w-full text-white font-semibold my-2">
                <div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + B : Font Bold</span>
            <span className="w-full text-white font-semibold my-2">
                <div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + I : Italics</span>
            <span className="w-full text-white font-semibold my-2">
                <div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> + U : Underline</span>

            {/* <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> +Alt + I : Image folder</span> */}

            <span className="w-full text-white font-semibold my-2"><div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg">Ctrl</div> +Alt + L : Code block</span>
        </div>
    </div>
}
export default ShortKey