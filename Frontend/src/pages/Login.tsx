import React from "react";
import Title from "../components/Title";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return(
        <div className="flex justify-center w-screen">
            <div className="flex h-screen items-center">
                <div className="w-full block p-2 rounded-md border">
                    <div className="flex justify-center">
                        <Title text="Login" size="text-2xl" thickness="font-thin"/>
                    </div>
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}

export default Login