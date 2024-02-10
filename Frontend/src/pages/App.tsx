import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const App = () => {
    return(
        <div className="relative h-screen w-screen">
            <div className="flex w-full h-full p-2">
                <div className="block h-full">
                    <Sidebar/>
                </div>
                <div className="w-full pl-4">
                    <Topbar/>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default App