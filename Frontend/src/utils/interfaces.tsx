import { Dispatch, SetStateAction } from "react"
import { IconType } from "react-icons";

export interface IErrorProps {
    message?: string,
}

export interface IActionType {
    type: string,
    payload: string | object | any
}

export interface UIContext { 
    openedMenu: boolean
    themeDark: boolean,
    toggleMenu?: () => void
    switchTheme?: () => void
}

export interface IUserProfile {
    id: number,
    name: string,
    email: string,
    createdAt?: string | any,
    updatedAt?: string | any,
    picture: string
}

export interface IUserProfileContext {
    user: IUserProfile
    token: string

    setToken: Dispatch<SetStateAction<string>>
    setUser: Dispatch<SetStateAction<IUserProfile>>
}

export interface IMainProps {
    mobile?: boolean
}

export interface ITitleProps {
    text: string,
    size: string,
    thickness: string
}

export interface ILoginForm {
    email: string,
    password: string
}

export interface IButtonProps {
    text: string,
    bgColor: string,
    textColor?: string,
    fun?: (args?: any) => void
}

export interface ILoginResponse {
    message: string,
    okay: boolean | undefined,
    token?: string,
    data?: IUserProfile[]
}

export interface IMenuItem {
    icon: IconType,
    color: string,
    link: string,
    text?: string | undefined
}

export interface IFasta {
    id?: number,
    title: string,
    sequence: string,
}

export interface ILetterProps {
    sequence: string
}

export interface IBrickProps {
    letter: string
}

export interface IColorConfig {
    letter: string,
    color: string
}