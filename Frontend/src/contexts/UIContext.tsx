import React, { createContext, useContext, useState } from "react";

import { UIContext} from "../utils/interfaces";

const defaultValues: UIContext = {
    openedMenu: false,
    themeDark: false
}

export const UIStateContext = createContext<UIContext>(defaultValues)

export const UIContextProvider = ({children}: any) => {
    const [themeDark, setThemeDark] = useState<boolean>(defaultValues.themeDark)
    const [openedMenu, setOpenedMenu] = useState<boolean>(defaultValues.openedMenu)

    const toggleMenu = () => setOpenedMenu(!openedMenu)
    const switchTheme = () => setThemeDark(!themeDark)

    return(
        <UIStateContext.Provider value={{themeDark, switchTheme, openedMenu, toggleMenu}}>
            {children}
        </UIStateContext.Provider>
    );
}

export const useUIContext = () => useContext(UIStateContext)