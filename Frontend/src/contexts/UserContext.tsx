import React, { createContext, useContext, useState } from "react";

import { IUserProfile, IUserProfileContext } from "../utils/interfaces";

const defaultValues: IUserProfileContext = {
    user: {id: 0, name: "User", email: "user@mail.com", picture: "http://pic.me"},
    token: "",
    setToken(){},
    setUser(){},
}

export const UserStateContext = createContext<IUserProfileContext>(defaultValues)

export const UserContextProvider = ({children}: any) => {
    const [token, setToken] = useState<string>(defaultValues.token);
    const [user, setUser] = useState<IUserProfile>(defaultValues.user)

    return(
        <UserStateContext.Provider value={{token, setToken, user, setUser}}>
            {children}
        </UserStateContext.Provider>
    );
}

export const useUserContext = () => useContext(UserStateContext)