import React from "react";
import { IErrorProps } from "../utils/interfaces";

const Error = (props: IErrorProps) => {
    return(
        <div>
            Error: 
            {props.message}
        </div>
    )
}

export default Error