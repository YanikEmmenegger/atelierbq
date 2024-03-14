import {FC} from "react";
import Heading1 from "@/components/Heading1";
import HeroSection from "@/components/about/HeroSection";


const Page: FC = () => {
    return (
        <>
            <Heading1 text={"Über uns"}></Heading1>
            <p className={"text-lg pb-10"}>
                Wir sind ein Architekturbüro.
                Wir bauen Häuser.
                Wir bauen Brücken.
                Wir bauen Städte.
                Wir bauen Träume.
                Wir bauen Zukunft.
                Wir bauen.
                Wir sind Atelier B².
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec
                ultricies
                condimentum, nunc odio aliquam justo, et tincidunt odio libero in libero. Sed
                malesuada
                tortor nec odio elementum, vel tincidunt odio lacinia. Sed malesuada tortor nec odio
                elementum, vel tincidunt odio lacinia. Sed malesuada tortor nec odio elementum, vel
            </p>
            <Heading1 text={"Wer sind wir | Team"}></Heading1>
            {/*HERO SECTIONS FOR BOTH TEAM MEMBERS*/}
            <HeroSection name={"Jan Blatter"} text={"Hier könnte eine kurze vorstellung von dir sein oder es könnte ein Zitat/Spruch stehen mit dem du dich identifizierst"} img={""} subtitle={"Dipl. Bauleiter oder was auch immer"} title={"Geschäftsführer"}   ></HeroSection>

        </>

    );
}

export default Page;