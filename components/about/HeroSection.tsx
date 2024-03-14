import {FC} from "react";
import Image from "next/image";
import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";


interface HeroSectionProps {
    text: string;
    title: string;
    subtitle: string;
    img: string;
    name: string;
}

const HeroSection: FC<HeroSectionProps> = ({text, subtitle, title, img, name}) => {
    return (
        <>
            <div className={"flex gap-4 py-8"}>
                <div>
                    <Image src={"https://placehold.co/400x200/png"} alt={"Hero Image"} width={400} height={200}/>
                </div>
                <div className={"bg-AtelierBQ-Light grayscale grow flex flex-col justify-center px-10"}>
                    <Heading2 text={name+" | "+title}/>
                    <Heading3 text={subtitle}/>
                    <p className={"p-5 italic"}>{'"' + text + '"'}</p>
                </div>
            </div>
            <div className={"flex gap-4 py-8"}>
                <div>
                    <Image src={"https://placehold.co/200x200/png"} alt={"Hero Image"} width={200} height={200}/>
                </div>
                <div className={"bg-AtelierBQ-Light grayscale grow flex flex-col justify-center px-10"}>
                    <Heading2 text={name+" | "+title}/>
                    <Heading3 text={subtitle}/>
                    <p className={"p-5 italic"}>{'"' + text + '"'}</p>
                </div>
            </div>
            <div className={"flex gap-4 py-8"}>
                <div>
                    <Image src={"https://placehold.co/400x400/png"} alt={"Hero Image"} width={400} height={400}/>
                </div>
                <div className={"bg-AtelierBQ-Light grayscale grow flex flex-col justify-center px-10"}>
                    <Heading2 text={name+" | "+title}/>
                    <Heading3 text={subtitle}/>
                    <p className={"p-5 italic"}>{'"' + text + '"'}</p>
                </div>
            </div>
            <div className={"flex gap-4 py-8"}>

                <div className={"bg-AtelierBQ-Light grayscale grow flex flex-col justify-center px-10"}>
                    <Heading2 text={name+" | "+title}/>
                    <Heading3 text={subtitle}/>
                    <p className={"p-5 italic"}>{'"' + text + '"'}</p>
                </div>
                <div>
                    <Image src={"https://placehold.co/400x400/png"} alt={"Hero Image"} width={400} height={400}/>
                </div>
            </div>
        </>
    );
};

export default HeroSection;