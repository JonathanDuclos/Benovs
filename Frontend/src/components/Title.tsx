import React from "react";

import { ITitleProps } from "../utils/interfaces";

const Title = (props: ITitleProps) => {
    return(
        <div className={`${props.size} ${props.thickness}`}>
            {props.text}
        </div>
    )
}

export default Title