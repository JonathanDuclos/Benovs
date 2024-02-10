import { IColorConfig, IMenuItem } from "./interfaces";

import { MdScience } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdCompare } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdDataArray } from "react-icons/md";
import { MdDiversity2 } from "react-icons/md";

export const MENU_LOGO: IMenuItem = {
    icon: MdScience, 
    color: 'bg-gradient-to-r from-indigo-500 to-green-600', 
    text: 'Benovs',
    link: '/app/dashboard'
}

export const MENU_ITEMS: IMenuItem[] = [
    {icon: MdDashboard, color: 'text-violet-600', text: 'Dashboard', link: '/app/dashboard'},
    {icon: MdCompare, color: 'text-orange-600', text: 'Compare', link: '/app/compare'},
    {icon: MdSettings, color: 'text-slate-600', text: 'Settings', link: '/app/settings'},
    {icon: MdDiversity2, color: 'text-indigo-600', text: 'About', link: '/app/about'},
]

export const DEFAULT_CONFIG_COLOR: IColorConfig[] = [
    {letter: "T", color: 'bg-indigo-400'},
    {letter: "G", color: 'bg-violet-400'},
    {letter: "C", color: 'bg-sky-400'},
    {letter: "A", color: 'bg-green-400'},
    {letter: "M", color: 'bg-slate-400'},
    {letter: "F", color: 'bg-red-400'},
    {letter: "E", color: 'bg-blue-400'},
    {letter: "H", color: 'bg-orange-400'},
    {letter: "V", color: 'bg-amber-400'},
    {letter: "L", color: 'bg-yellow-400'},
    {letter: "I", color: 'bg-lime-400'},
    {letter: "N", color: 'bg-emerald-400'},
    {letter: "R", color: 'bg-cyan-400'},
    {letter: "P", color: 'bg-purple-400'},
    {letter: "D", color: 'bg-pink-400'},
    {letter: "Y", color: 'bg-rose-400'},
    {letter: "S", color: 'bg-indigo-600'},
    {letter: "Q", color: 'bg-rose-600'},
    {letter: "K", color: 'bg-lime-600'},
    {letter: "W", color: 'bg-white'},
]

export enum USER_ACTION_TYPES {
    LOGIN = "user/login",
    CREATE = "user/create",
    DELETE = "user/delete",
    UPDATE = "user/update",
    LOGOUT = "user/logout"
}