'use client'
import {FC, useEffect, useState} from "react";
import Heading1 from "@/components/Heading1";
import HeroSection from "@/components/about/HeroSection";
import HeroSectionSkeleton from "@/components/about/HeroSectionSkeleton";
import {Hero} from "@/types/types";
import {mockHeros} from "@/mocks/heros";


const Team: FC = () => {

    const [heros, setHeros] = useState<Hero[]>([])

    useEffect(() => {
        setTimeout(() => {
            setHeros(mockHeros)
        }, 200)
    }, []);


    return (
        <div className={"pb-10"}>
            <Heading1 text={"Wer sind wir | Team"}></Heading1>
            {heros.length === 0 ? <HeroSectionSkeleton index={1}/> : heros.map((hero, index) => {
                return <HeroSection key={index} index={index} name={hero.name} title={hero.title} subtitle={hero.subtitle} text={hero.text} img={hero.img}/>
            })}
        </div>
    );
}

export default Team;