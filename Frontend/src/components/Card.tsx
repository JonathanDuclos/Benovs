import React from "react";
import { IFasta } from "../utils/interfaces";

import { IoMdTrash } from "react-icons/io";
import Letter from "./Graphs/Letter";
import Color from "./Graphs/Color";

const Card = (props: IFasta) => {
    return(
        <div className="mt-2 block p-2 shadow-md rounded-md">
            <div className="flex justify-between">
                <div className="">
                    <span className="text-md font-medium">
                        {props.title}
                    </span>
                </div>
                <div className="text-red-600 hover:scale-110 hover:animate-pulse">
                    <IoMdTrash/>
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4 p-2">
                <Letter sequence={props.sequence} />
                <Color sequence={props.sequence} />
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
        </div>
    )
}

export default Card