'use client'
import {FC, useEffect, useState} from "react";
import {motion} from "framer-motion";
import Heading1 from "@/components/Heading1";
import {Value} from "@/types/types";
import {mockValues} from "@/mocks/vlaues";
import ValueItem from "@/components/about/ValueItem";


const Values: FC = () => {

    const [values, setValues] = useState<Value[]>([])

    useEffect(() => {
        setTimeout(() => {
            setValues(mockValues)
        }, 200)
    }, []);


    return (
        <div className={"py-5"}>
            <Heading1 text={"Unsere Werte"}></Heading1>
            <p className={"text-lg pb-10 font-light"}>
                Unsere Werte sind die Basis unserer Arbeit und unseres Handelns. Sie sind uns wichtig und prägen unsere tägliche Arbeit.
            </p>
            <div className={"flex flex-wrap justify-center"}>
                {values.map((value, index) => {
                    return <ValueItem text={value.text} img={value.img} title={value.title} key={index}/>
                })
                }
            </div>

        </div>
    );
}

export default Values;