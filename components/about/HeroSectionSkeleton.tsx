'use client'
import {FC, useEffect, useState} from "react";
import {twMerge} from "tailwind-merge";


interface HeroSectionSkeletonProps {
    index: number;
}

const HeroSectionSkeleton: FC<HeroSectionSkeletonProps> = ({index}) => {
    const [oddOrEven, setOddOrEven] = useState(true)
    useEffect(() => {
        //check if index is odd or even (even will return true
        setOddOrEven(index % 2 !== 0)
    }, [index]);

    return (
        <div
            className={twMerge("animate-pulse mt-3 flex gap-4 py-8", oddOrEven ? "flex-col md:flex-row" : "flex-col-reverse md:flex-row-reverse")}>
            <div className={"w-1/3 bg-gray-200 h-[400px]"}>

            </div>
            <div className={"w-2/3 flex flex-col justify-center px-10"}>
                <h1 className={"text-3xl bg-gray-200 text-transparent font-normal"}> This is a text for the sceleton </h1>
                <h1 className={"text-2xl bg-gray-200 text-transparent font-normal"}> This is a text for the sceleton </h1>
                <p className={"p-5 text-transparent bg-gray-200"}> This is a text for the sceleton </p>
            </div>

        </div>
    );
}

export default HeroSectionSkeleton;