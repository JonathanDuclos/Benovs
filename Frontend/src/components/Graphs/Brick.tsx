import React from "react";

import { IBrickProps } from "../../utils/interfaces";
import { DEFAULT_CONFIG_COLOR } from "../../utils/constants";

const getColor = (letter: string) => {
    let color = DEFAULT_CONFIG_COLOR.find(element => element.letter == letter)
    console.log("Letter: ", letter, " Color: ", color)
    return color
}

const Brick = (props: IBrickProps) => {
    let bg = getColor(props.letter)

    return(
        <div title={props.letter} className={`${bg?.color} w-4 h-4 hover:scale-110 border border-slate-600`}></div>
    )
}

export default Brick