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
        <motion.div initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}>
            <Heading1 text={"Unsere Werte"}></Heading1>
            <p className={"text-lg pb-10 font-light"}>
                Unsere Werte sind die Basis unserer Arbeit und unseres Handelns. Sie sind uns wichtig und prägen unsere tägliche Arbeit.
            </p>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                {values.map((value, index) => {
                    return <ValueItem text={value.text} img={value.img} title={value.title} key={index}/>
                })
                }
            </div>

        </motion.div>
    );
}

export default Values;