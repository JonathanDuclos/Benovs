import React from "react";

import { IButtonProps } from "../utils/interfaces";

const Button = (props: IButtonProps) => {
    return(
        <button className={`w-full p-2 ${props.bgColor} ${props.textColor}`} onClick={props.fun}>
            {props.text}
        </button>
    )
}

export default Button