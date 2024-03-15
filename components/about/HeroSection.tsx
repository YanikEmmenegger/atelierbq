import { FC, useEffect, useState } from "react";
import Image from "next/image";
import Heading2 from "@/components/Heading2";
import Heading3 from "@/components/Heading3";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface HeroSectionProps {
    text: string;
    title: string;
    subtitle: string;
    img: string;
    name: string;
    index: number;
}

const HeroSection: FC<HeroSectionProps> = ({ text, subtitle, title, img, name, index }) => {
    const [loading, setLoading] = useState(true);
    const [oddOrEven, setOddOrEven] = useState(true);

    useEffect(() => {
        // Check if index is odd or even (even will return true)
        setOddOrEven(index % 2 === 0);
    }, [index]);

    // Skeleton-Stil
    const skeletonStyle = {
        width: '100%',
        height: '100%',
        backgroundColor: '#e0e0e0',
    };

    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}>
            <div
                className={twMerge("mt-3 text-center flex gap-4 py-8", oddOrEven ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse")}>
                <div className={"lg:w-1/3 w-1/2 bg-AtelierBQ-AccentDark mx-auto"}>
                    {/* Anzeigen des Skeleton, während das Bild lädt */}
                    <Image
                        src={img}
                        alt={"Hero Image"}
                        width={400}
                        height={400}
                        className={twMerge('mx-auto w-full',loading ? "opacity-0" : "opacity-100")}
                        onLoadingComplete={() => setLoading(false)}
                    />
                </div>
                <div className={"lg:w-2/3 w-full mx-auto bg-AtelierBQ-Light flex flex-col justify-center px-10"}>
                    <Heading2 text={name + " | " + title}/>
                    <Heading3 text={subtitle}/>
                    <p className={"p-5 italic font-thin"}>{'"' + text + '"'}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
