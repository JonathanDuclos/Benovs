import React from "react";
import { ILetterProps } from "../../utils/interfaces";

const Letter = (props: ILetterProps) => {
    return(
        <div className="block">
            <div>
                <span className="font-thin text-sm">Letter Sequence</span>
            </div>
            <div className="">
                <span className="break-all text-xs font-mono tracking-wider">
                    {props.sequence}
                </span>
            </div>
        </div>
    )
}

export default Letter