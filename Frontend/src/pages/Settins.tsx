import React from "react";
import Title from "../components/Title";
import Copyright from "../components/Copyright";

const Settings = () => {
    return(
        <div className="h-full">
            <div className="block">
                <div className="flex">
                    <Title text="Settings" size="text-3xl" thickness="font-thin"/>
                </div>
                <div className="w-full">
                    <div className="p-2">
                        Content
                    </div>
                    <Copyright/>
                </div>
            </div>
        </div>
    )
}

export default Settings