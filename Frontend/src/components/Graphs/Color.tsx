import React from "react";
import { ILetterProps } from "../../utils/interfaces";
import Brick from "./Brick";

const Color = (props: ILetterProps) => {
    let letters = props.sequence.split("")

    return(
        <div className="block">
            <div>
                <span className="font-thin text-sm">Colored Sequence</span>
            </div>
            <div className="">
                <span className="grid grid-cols-12 gap-0.5">
                    {
                        letters.map(letter => <Brick letter={letter}/>)
                    }
                </span>
            </div>
        </div>
    )
}

export default Color