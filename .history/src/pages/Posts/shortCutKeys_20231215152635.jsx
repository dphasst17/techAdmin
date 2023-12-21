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
    return <div className="shortKey-container md:w-[90%] h-auto flex flex-wrap justify-around bg-slate-500 rounded-lg px-2">
        {shortKey.map(e => <div className={`${e.name}  w-[23%] h-auto flex flex-col flex-wrap`} key={e.name}>
            {e.detail.map(d => <span className="w-full flex flex-wrap items-center text-white font-semibold my-2" key={d.result}>
                <div className="w-[60px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg mx-2 cursor-pointer hover:bg-slate-700 hover:text-slate-300 transition-all">{d.first}</div> + 
                <div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg mx-2 cursor-pointer hover:bg-slate-700 hover:text-slate-300 transition-all">{d.second}</div>
                {d.third !== "" && " + "}
                {d.third !== "" && <div className="w-[40px] h-[20px] flex justify-center items-center text-slate-900 bg-slate-400 rounded-lg mx-2 cursor-pointer hover:bg-slate-700 hover:text-slate-300 transition-all">{d.third}</div> }
                : {d.result}
            </span>)}

        </div>)}
        
    </div>
}
export default ShortKey