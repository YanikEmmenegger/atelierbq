import {FC} from "react";
import Team from "@/components/about/Team";
import Aboutus from "@/components/about/aboutus";
import Skills from "@/components/about/Skills";
import Values from "@/components/about/Values";


const Page: FC = () => {
    return (
        <>
            <Aboutus/>
            <Team/>
            <Skills/>
            <Values/>
        </>

    );
}

export default Page;