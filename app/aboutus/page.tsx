import {FC} from "react";
import Team from "@/components/about/Team";
import Aboutus from "@/components/about/aboutus";
import Skills from "@/components/about/Skills";
import Values from "@/components/about/Values";
import Mission from "@/components/about/Mission";
import Credo from "@/components/about/Credo";
import Partner from "@/components/about/Partners";


const Page: FC = () => {
    return (
        <>
            <Aboutus/>
            <Team/>
            <Skills/>
            <Values/>
            <Mission/>
            <Credo/>
            <Partner/>
        </>

    );
}

export default Page;