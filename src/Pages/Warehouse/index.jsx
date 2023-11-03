import Diary from "./dairy";
import Total from "./totalProduct";

const Warehouse = () => {
    return <div className="warehouse-container w-full h-auto">
        <div className="warehouse-add w-[280px] h-[40px] flex justify-center items-center text-slate-100 text-[18px] font-semibold bg-slate-900 hover:bg-blue-500 transition-all rounded-lg mx-4 my-3 cursor-pointer">Add product to warehouse</div>
        <Diary />
        <Total />
    </div>
}
export default Warehouse;