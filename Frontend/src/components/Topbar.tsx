import React from "react";

import { useSelector } from 'react-redux'
import { IUserProfile } from "../utils/interfaces";
import UserReducer from "../redux/reducers/UserReducer";

const Topbar = ({}) => {
    const { name } = useSelector<any>(rootReducers => rootReducers.UserReducer)

    return(
        <div className="flex items-center justify-end p-2 pr-4">
            <div className="w-1/12">
                <span className="font-thin text-sm">User</span>
            </div>
            <div className="flex items-center rounded-full h-3 w-3 bg-slate-500">
                
            </div>
        </div>
    )
}

export default Topbar