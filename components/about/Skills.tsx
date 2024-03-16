'use client'

import {FC, useEffect, useState} from "react";
import Heading1 from "@/components/Heading1";
import {Skill} from "@/types/types";
import {mockSkills} from "@/mocks/skills";
import SkillItem from "@/components/about/SkillItem";
import { motion } from "framer-motion";



const Skills: FC = () => {

    const [skills, setSkills] = useState<Skill[]>([])

    useEffect(() => {
        setTimeout(() => {
            setSkills(mockSkills)
        }, 200)
    }, []);
    
    return (
        <motion.div className={"py-5"} initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.75 }}>
            <Heading1 text={"Kompetenzen"}></Heading1>
            <p className={"text-lg pb-10 font-light"}>
                Unsere Kompetenzen sind breit gefächert und reichen von der Konzeption und Planung bis hin zur Umsetzung von Bauten .
            </p>
            <div className={"grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                {skills.map((skill, index) => {
                    return <SkillItem key={index} title={skill.title} text={skill.text} img={skill.img}/>
                })}

            </div>

        </motion.div>
    );
}

export default Skills;