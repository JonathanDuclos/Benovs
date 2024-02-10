import React, { useState } from "react";

import { ILoginForm, ILoginResponse, IUserProfile } from "../utils/interfaces";
import { useUserContext } from "../contexts/UserContext";
import { auth } from "../axios/axios";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";

const LoginForm = () => {
    const [form, setForm] = useState<ILoginForm>({email: "", password: ""} as ILoginForm)
    const [response, setResponse] = useState<ILoginResponse>({message: "", okay: undefined, data: []})
    const { setUser } = useUserContext()
    const navigate = useNavigate()

    async function login(){
        const result = await auth(form);
        setResponse(result)

        if( result.okay ) {
            setUser(result.data)
            sessionStorage.setItem("token", result.token)
            navigate("/app/dashboard")
        }
    }

    return(
        <div className="block p-1 w-full">
            <div className="flex w-full p-1">
                <span className="flex items-center">
                    <MdEmail/>
                </span>
                <input className="border m-1 p-1" type="email" name="email" id="email" value={form.email} onChange={e => setForm({...form, email: e.currentTarget.value})}/>
            </div>
            <div className="flex w-full p-1">
                <span className="flex items-center">
                    <MdPassword/>
                </span>
                <input className="border m-1 p-1" type="password" name="password" id="password" value={form.password} onChange={e => setForm({...form, password: e.currentTarget.value})}/>
            </div>
            <div>
                <Button text="Submit" bgColor="bg-slate-500" textColor="text-white" fun={login}/>
            </div>
            <div className="flex p-1 justify-center">
                {response.okay ? <span className="p-1 font-thin bg-green-400 text-sm">Logged In</span> : <span className="p-1 font-thin bg-red-400 text-sm">Some error occurred</span> }
            </div>
        </div>
    )
}

export default LoginForm