import React from "react";

import { IMainProps } from "../utils/interfaces";
import { useUIContext } from "../contexts/UIContext";
import { NavLink } from "react-router-dom";

const Main = (props: IMainProps) => {
    const {themeDark, switchTheme} = useUIContext()

    return(
        <div>
            Main {themeDark ? "Dark" : "Light"}
            <NavLink to={"/login"}>
                Go to Login...
            </NavLink>
            <p>
                Todo: Login Page
            </p>
        </div>
    )
}

export default Main