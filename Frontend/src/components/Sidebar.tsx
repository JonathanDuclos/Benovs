import React from "react";

import { NavLink } from "react-router-dom";
import { MENU_LOGO, MENU_ITEMS } from "../utils/constants";

const Sidebar = () => {
    return(
        <div className="h-full bg-white shadow-md p-1">
            <div className="block p-1">
                <div className={`flex justify-center items-center hover:scale-110`}>{ <MENU_LOGO.icon className={`rounded-md h-8 w-8 ${MENU_LOGO.color}`}/> }</div>
                <div className="text-xs">{ MENU_LOGO.text }</div>
            </div>
            <div className="mt-8">
                {
                    MENU_ITEMS.map(item => 
                        <div className={`flex my-4 justify-center items-center hover:scale-110`}>
                            <NavLink to={item.link}  className={({ isActive, isPending }) => isPending ? "bg-transparent" : isActive ? `${item.color}` : ""}>
                                { <item.icon className={`h-5 w-5`}/> }
                            </NavLink>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar