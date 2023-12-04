import { useContext } from "react"
import { StateContext } from "~/context/stateContext"
import { FaBars } from "react-icons/fa"
const BtnNav = () => {
    const { setShowNav } = useContext(StateContext);
    return <div className="btnShowNav w-screen h-[5vh] lg:hidden flex my-4">
        <div className="icon w-[100px] h-full" onClick={() => { setShowNav(true) }}>
            <FaBars className="w-4/5 h-4/5 text-white" />
        </div>
    </div>
}
export default BtnNav