import React from "react";
import Title from "../components/Title";
import Copyright from "../components/Copyright";

import { DUMMY_FASTAS } from "../utils/data";
import Card from "../components/Card";

const Dashboard = () => {
    return(
        <div className="h-full w-full">
            <div className="block h-full">
                <div className="flex">
                    <Title text="Dashboard" size="text-2xl" thickness="font-thin"/>
                </div>
                <div className="">
                    <div className="p-2">
                        {
                            DUMMY_FASTAS.map(fasta => <Card id={fasta.id} title={fasta.title} sequence={fasta.sequence} />)
                        }
                    </div>
                    <Copyright/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard